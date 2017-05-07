import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ReactiveFormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { FileUploadModule } from 'ng2-file-upload';
import { ConfirmModule} from 'angular2-bootstrap-confirm';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Autosize } from 'angular2-autosize/src/autosize.directive';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";



import { AppComponent } from './app.component';
import { TagelerListComponent } from './tagelers/tageler-list/tageler-list.component';
import { TagelerDetailsComponent } from './tagelers/tageler-details/tageler-details.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';

import { GroupService } from './groups/group.service';

import { TagelerService } from './tagelers/tageler.service';
import { TagelerComponent } from './tagelers/tageler/tageler.component';
import { AdminComponent } from './admin/admin.component';

import { FilterGroupByTypePipe } from './pipes/groupType.pipe';
import { NextTagelerPipe } from './pipes/nextTageler.pipe';
import { OtherTagelerPipe } from './pipes/otherTageler.pipe';
import { TagelerByGroupAndByDate } from './pipes/tagelerByGroupAndByDate.pipe';
import { OldTagelerByGroupAndByDate } from './pipes/oldTagelerByGroupAndByDate.pipe';
import { ToLocalTimePipe } from './pipes/toLocalTimePipe.pipe';
import { ToLocalDatePipe } from './pipes/toLocalDatePipe.pipe';

import { LOCALE_ID } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    TagelerListComponent,
    TagelerDetailsComponent,
    GroupDetailsComponent,
    TagelerComponent,
    AdminComponent,
    FilterGroupByTypePipe,
    NextTagelerPipe,
    OtherTagelerPipe,
    TagelerByGroupAndByDate,
    OldTagelerByGroupAndByDate,
    ToLocalTimePipe,
    ToLocalDatePipe,
    Autosize,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    FormsModule,
    HttpModule,
    Ng2DropdownModule,
    MultiselectDropdownModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule,
    Ng2DatetimePickerModule,
    FileUploadModule,
    ConfirmModule,
  ],
  providers: [
    TagelerService,
    GroupService,
    {provide: LOCALE_ID, useValue: "de-DE"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
