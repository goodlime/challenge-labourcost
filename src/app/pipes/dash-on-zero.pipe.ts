import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashOnZero'
})
export class DashOnZeroPipe implements PipeTransform {

  transform(value: string|number): string {
    if (value.toString() === '0' || value === null) {
      return '-';
    }
    return value.toString();
  }

}
