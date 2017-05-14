import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToLocalDate',
})

export class ToLocalDatePipe implements PipeTransform {

  transform(date: Date) {
    let parsedDateTime;
    let wochentag, monat;

    if (date==null) {
      return null;
    }

    if(new Date(date).getUTCDay() == 0) { wochentag = 'Sonntag'}
    if(new Date(date).getUTCDay() == 6) { wochentag = 'Samstag'}
    if(new Date(date).getUTCDay() == 5) { wochentag = 'Freitag'}
    if(new Date(date).getUTCDay() == 4) { wochentag = 'Donnerstag'}
    if(new Date(date).getUTCDay() == 3) { wochentag = 'Mittwoch'}
    if(new Date(date).getUTCDay() == 2) { wochentag = 'Dienstag'}
    if(new Date(date).getUTCDay() == 1) { wochentag = 'Montag'}

    if(new Date(date).getUTCMonth() == 0) { monat = 'Januar'}
    if(new Date(date).getUTCMonth() == 1) { monat = 'Februar'}
    if(new Date(date).getUTCMonth() == 2) { monat = 'März'}
    if(new Date(date).getUTCMonth() == 3) { monat = 'April'}
    if(new Date(date).getUTCMonth() == 4) { monat = 'Mai'}
    if(new Date(date).getUTCMonth() == 5) { monat = 'Juni'}
    if(new Date(date).getUTCMonth() == 6) { monat = 'Juli'}
    if(new Date(date).getUTCMonth() == 7) { monat = 'August'}
    if(new Date(date).getUTCMonth() == 8) { monat = 'September'}
    if(new Date(date).getUTCMonth() == 9) { monat = 'Oktober'}
    if(new Date(date).getUTCMonth() == 10) { monat = 'November'}
    if(new Date(date).getUTCMonth() == 11) { monat = 'Dezember'}

    parsedDateTime = wochentag + ', ' + new Date(date).getUTCDate() + '. ' + monat + ' ' + new Date(date).getUTCFullYear();
    return parsedDateTime;
  }

}
