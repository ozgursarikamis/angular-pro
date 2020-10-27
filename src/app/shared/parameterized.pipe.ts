import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parameterized'
})
export class ParameterizedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
	  console.log('args :>> ', args);
    return null;
  }

}
