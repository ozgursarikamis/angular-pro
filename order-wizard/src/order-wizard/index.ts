import { Rule, SchematicContext, Tree, url, apply, move, mergeWith, MergeStrategy } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function orderWizard(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const folderPath = normalize(_options.path + '/' + _options.name);
    let files = url('./files');

    const newTree = apply(files, [
      move(folderPath) // rules here.
    ]);

    const templateRute = mergeWith(newTree, MergeStrategy.Default);
    return templateRute(tree, _context);
  };
}
