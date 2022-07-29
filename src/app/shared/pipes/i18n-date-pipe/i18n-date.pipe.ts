import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'i18nDate'
})
export class I18nDatePipe implements PipeTransform {

  transform(dateString: string, separator: string): string {
    let formattedDate: string = '';
    let year: string = dateString.substring(0,4);
    let month: string = dateString.substring(5,7);
    let day: string = dateString.substring(8,10);
    return formattedDate.concat(day,separator,month,separator,year);
  }

}
