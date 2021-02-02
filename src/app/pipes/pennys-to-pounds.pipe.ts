import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe  } from '@angular/common';

@Pipe({
  name: 'pennysToPounds'
})
export class PennysToPoundsPipe implements PipeTransform {

  constructor(
    private currencyPipe: CurrencyPipe
  ) {}

  transform(value: number, ...args: unknown[]): string {
    return this.currencyPipe.transform(value / 100, 'GBP', '', '1.0-0');
  }

}
