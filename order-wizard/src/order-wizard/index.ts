import { Rule, SchematicContext, Tree, url, apply, move, mergeWith, MergeStrategy, template, filter, SchematicsException, chain, TaskId } from '@angular-devkit/schematics';
import { normalize, strings, experimental } from '@angular-devkit/core';

import * as ts from 'typescript';

import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { NodePackageTaskOptions } from '@angular-devkit/schematics/tasks/package-manager/options';

let materialInstallTaskId: TaskId;

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function orderWizard(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const folderPath = normalize(_options.path + '/' + _options.name);

    const workspace = getWorkspace(_options, tree);
    let files = url('./files');

    const newTree = apply(files, [
      move(folderPath), // rules here.
      template({
        ...strings,
        ..._options
      }),
      specFilter(_options)
    ]);

    const templateRule = mergeWith(newTree, MergeStrategy.Default);
    const updateModuleRule = updateRootModule(_options, workspace);

    // add material:
    const installMaterialRule = installMaterial();
    const addMaterialRule = addMaterial();
    const chainedRule = chain([templateRule, updateModuleRule, installMaterialRule, addMaterialRule]);
    return chainedRule(tree, _context);
  };
}

function specFilter(_options: any): Rule {
  if (_options.spec === 'false') {
    return filter(path => {
      return !path.match(/\.spec\.ts$/) && !path.match(/test\.ts$/);
    })
  }
  return filter(path => !path.match(/test\.ts$/))
}

function getWorkspace(_options: any, tree: Tree): experimental.workspace.WorkspaceSchema {
  const workspace = tree.read('/angular.json');
  if (!workspace) {
    throw new SchematicsException('angular.json file not found');
  }
  return JSON.parse(workspace.toString());
}

function updateRootModule(_options: any, workspace: any) {
  return (tree: Tree, _context: SchematicContext): Tree => {
    _options.project = (_options.project !== 'defaultProject!') ? workspace.defaultProject : _options.project;

    const project = workspace.projects[_options.project];
    const moduleName = strings.dasherize(_options.name);
    const exportedModuleName = strings.classify(_options.name);
    const modulePath = strings.dasherize(_options.path);

    const rootModulePath = `${project.root}/${project.sourceRoot}/${project.prefix}/${project.prefix}.module.ts`;

    // generate import path:
    const importContent = `import { ${exportedModuleName}Module } from './${modulePath}/${moduleName}/${moduleName}.module';`

    const moduleFile = getAsSourceFile(tree, rootModulePath);
    const lastImportEndPosition = findLastImportEndPosition(moduleFile);
    const importArrayEndPosition = findImportArray(moduleFile); // find 'imports' array in NgModule decorator

    // write import path to the file:
    const rec = tree.beginUpdate(rootModulePath);
    rec.insertLeft(lastImportEndPosition + 1, importContent);
    rec.insertLeft(importArrayEndPosition - 1, `,\n${exportedModuleName}Module`);

    tree.commitUpdate(rec);

    return tree;
  }
}

function getAsSourceFile(tree: Tree, path: string): ts.SourceFile {
  const file = tree.read(path);
  if (!file) {
    throw new SchematicsException(`${path} not found`);
  }
  return ts.createSourceFile(
    path,
    file.toString(),
    ts.ScriptTarget.Latest,
    true
  );
}

function findLastImportEndPosition(file: ts.SourceFile): number {
  let position: number = 0;
  file.forEachChild((child: ts.Node) => {
    if (child.kind === ts.SyntaxKind.ImportDeclaration) {
      position = child.end;
    }
  });
  return position;
}

function findImportArray(file: ts.SourceFile): number {
  let pos: number = 0;

  file.forEachChild((node: ts.Node) => {
    if (node.kind === ts.SyntaxKind.ClassDeclaration) {
      node.forEachChild((classChild: ts.Node) => {
        if (classChild.kind === ts.SyntaxKind.Decorator) {
          classChild.forEachChild((moduleDeclaration: ts.Node) => {
            moduleDeclaration.forEachChild((objectLiteral: ts.Node) => {
              objectLiteral.forEachChild((property: ts.Node) => {
                if (property.getFullText().includes('imports')) {
                  pos = property.end;
                }
              });
            });
          });
        }
      });
    }
  });

  return pos;
}

function installMaterial(): Rule {
  return (tree: Tree, _context: SchematicContext): Tree => {
    const packageJsonPath = '/package.json';
    const materialDependencyName = '@angular/material';
    const packageJson = getAsSourceFile(tree, packageJsonPath);
    let materialInstalled = false;

    packageJson.forEachChild((node: ts.Node) => {
      if (node.kind === ts.SyntaxKind.ExpressionStatement) {
        node.forEachChild(objectLiteral => {
          objectLiteral.forEachChild(property => {
            if (property.getFullText().includes('dependencies')) {
              property.forEachChild(dependency => {
                if (dependency.getFullText().includes(materialDependencyName)) {
                  _context.logger.info('Angular Material already installed');
                  materialInstalled = true;
                }
              });
            }
          });
        });
      }
    });

    if (!materialInstalled) {
      const options = <NodePackageTaskOptions> {
        packageName: materialDependencyName
      };
      materialInstallTaskId = _context.addTask(new NodePackageInstallTask(options));
      _context.logger.info(`Installing Angular Material`);
    }
    return tree;
  }
}

function addMaterial(): Rule {
  return (tree: Tree, _context: SchematicContext): Tree => {
    const options = {
      theme: 'indigo-pink',
      gestures: true,
      animations: true
    };

    // to run an external schmatic
    _context.addTask(new RunSchematicTask('@angular/material', 'ng-add', options), [materialInstallTaskId]);
    _context.logger.info(`Configuring Angular Material`);
    return tree;
  }
}
