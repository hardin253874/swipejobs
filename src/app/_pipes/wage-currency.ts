import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wageCurrency'
})

export class WageCurrencyPipe implements PipeTransform {
  transform(value?: number) {
    // need to show 0
    if ((!value || isNaN(Number(value))) && value !== 0) {
      return null;
    }

    const currencyCode = 'USD';
    const currentLanguage = 'en-AU';

    // {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}
    const currencyDigitInfo = '1.2-2';
    let currencyValue = null;

    let currencyPipe = null;
    currencyPipe = new CurrencyPipe(currentLanguage);
    currencyValue = currencyPipe.transform(Number(value/100), currencyCode, true, currencyDigitInfo );

    return !!currencyValue && currencyValue.charAt(0) === '-' ?
      '(' + currencyValue.substring(1, currencyValue.length) + ')' + '/hour' :
      currencyValue + '/hour' ;
  }
}
