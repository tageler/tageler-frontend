import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/de-ch'

@Pipe({
  name: 'convertToLocalDate',
})

/*
 * This pipe converts a date into a local date. It
 * returns a date of the form 'Wochentag, Datum. Monat Jahr'
 * (e.g. Samstag, 28. Oktober 2017).
 */

export class ToLocalDatePipe implements PipeTransform {

  transform(date: Date) {
    let moment_date, parsedDateTime;

    if (date==null) {
      return null;
    }

    moment_date = moment(date).locale('de-ch');

    parsedDateTime = moment_date.format('dddd, DD. MMMM YYYY');
    return parsedDateTime;
  }

}
