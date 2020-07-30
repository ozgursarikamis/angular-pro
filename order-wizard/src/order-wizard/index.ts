import { Rule, SchematicContext, Tree, url, apply, move, mergeWith, MergeStrategy, template, filter } from '@angular-devkit/schematics';
import { normalize, strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function orderWizard(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const folderPath = normalize(_options.path + '/' + _options.name);
    let files = url('./files');

    const newTree = apply(files, [
      move(folderPath), // rules here.
      template({
        ...strings,
        ..._options
      }),
      specFilter(_options)
    ]);

    const templateRute = mergeWith(newTree, MergeStrategy.Default);
    return templateRute(tree, _context);
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
