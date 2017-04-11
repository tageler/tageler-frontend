import { OnChanges } from '@angular/core';
export declare class NglDatepickerWeekdays implements OnChanges {
    dayNamesShort: string[];
    dayNamesLong: string[];
    firstDayOfWeek: number;
    weekdays: any[];
    ngOnChanges(changes?: any): void;
}
