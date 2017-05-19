import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToLocalTime',
})

/*
 * This pipe extracts the (local) time from a date. It
 * returns a date of the form 'HH:mm' (e.g. 14:00).
 */


export class ToLocalTimePipe implements PipeTransform {

  // args is either Trupp, Meute or Equipe
  transform(date: Date) {
    let parsedDateTime;

    if (date==null) {
      return null;
    }

    // Winter time
    if (new Date(date).getTimezoneOffset() == -60) {
      parsedDateTime = new Date(new Date(date).setHours(new Date(date).getHours() - 1)).toLocaleTimeString().slice(0, 5);
    }

    // Summer time
    if (new Date(date).getTimezoneOffset() == -120) {
      parsedDateTime = new Date(new Date(date).setHours(new Date(date).getHours() - 2)).toLocaleTimeString().slice(0, 5);
    }

    return parsedDateTime;
  }

}
