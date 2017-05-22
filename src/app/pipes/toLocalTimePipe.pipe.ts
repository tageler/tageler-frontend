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

      // european format, e.g. 05:00:00
      if (new Date(new Date(date).setHours(new Date(date).getHours() - 1)).toLocaleTimeString().charAt(2) == ':') {
        parsedDateTime = new Date(new Date(date).setHours(new Date(date).getHours() - 1)).toLocaleTimeString().slice(0, 5);
      }

      // american format, e.g. 5:00:00
      if (new Date(new Date(date).setHours(new Date(date).getHours() - 1)).toLocaleTimeString().charAt(1) == ':') {
        parsedDateTime = new Date(new Date(date).setHours(new Date(date).getHours() - 1)).toLocaleTimeString().slice(0, 4);

        if (new Date(new Date(date).setHours(new Date(date).getHours() - 1)).toLocaleTimeString().includes('PM')) {
          parsedDateTime += ' PM'
        }

        if (new Date(new Date(date).setHours(new Date(date).getHours() - 1)).toLocaleTimeString().includes('AM')) {
          parsedDateTime += ' AM'
        }
      }
    }

    // Summer time
    if (new Date(date).getTimezoneOffset() == -120) {

      // european format, e.g. 05:00:00
      if (new Date(new Date(date).setHours(new Date(date).getHours() - 2)).toLocaleTimeString().charAt(2) == ':') {
        parsedDateTime = new Date(new Date(date).setHours(new Date(date).getHours() - 2)).toLocaleTimeString().slice(0, 5);
      }

      // american format, e.g. 5:00:00
      if (new Date(new Date(date).setHours(new Date(date).getHours() - 2)).toLocaleTimeString().charAt(1) == ':') {
        parsedDateTime = new Date(new Date(date).setHours(new Date(date).getHours() - 2)).toLocaleTimeString().slice(0, 4);

        if (new Date(new Date(date).setHours(new Date(date).getHours() - 2)).toLocaleTimeString().includes('PM')) {
          parsedDateTime += ' PM'
        }

        if (new Date(new Date(date).setHours(new Date(date).getHours() - 2)).toLocaleTimeString().includes('AM')) {
          parsedDateTime += ' AM'
        }
      }
    }

    return parsedDateTime;
  }

}
