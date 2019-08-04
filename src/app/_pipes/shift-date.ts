import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as momentTz from 'moment-timezone';
@Pipe({
  name: 'shiftDate'
})

export class ShiftDatePipe implements PipeTransform {
  transform(value?: string, state: string) {
    // need to show 0
    if (!value || !moment(value).isValid()){
      return null;
    }
    let timezone = '';
    if (state === 'WA') {
      timezone = 'America/Los_Angeles';
    } else {
      timezone = 'Australia/Sydney';
    }
    return   moment(value).format('ddd MMM D h:mm A') + ' ' + momentTz.tz(timezone).format('z') ;
  }
}
