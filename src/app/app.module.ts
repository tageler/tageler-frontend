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
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Autosize } from 'angular2-autosize/src/autosize.directive';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { TagelerListComponent } from './tagelers/tageler-list/tageler-list.component';
import { TagelerDetailsComponent } from './tagelers/tageler-details/tageler-details.component';
import { TagelerSmallCardComponent } from './tagelers/tageler-small-card/tageler-small-card.component';
import { TagelerLargeCardComponent} from "./tagelers/tageler-large-card/tageler-large-card.component";
import { GroupDetailsComponent } from './groups/group-details/group-details.component';

import { GroupService } from './groups/group.service';

import { TagelerService } from './tagelers/tageler.service';
import { GroupComponent } from './groups/group/group.component';
import { AdminComponent } from './admin/admin.component';

import { DefaultPictureService } from './default-pictures/default-picture.service';

import { FilterGroupByTypePipe } from './pipes/groupType.pipe';
import { NextTagelerPipe } from './pipes/nextTageler.pipe';
import { OtherTagelerPipe } from './pipes/otherTageler.pipe';
import { TagelerByDate } from './pipes/tagelerByDate.pipe';
import { TagelerByGroupAndByDate } from './pipes/tagelerByGroupAndByDate.pipe';
import { PastTagelerByGroupAndByDate } from './pipes/pastTagelerByGroupAndByDate.pipe';
import { ToLocalTimePipe } from './pipes/toLocalTimePipe.pipe';
import { ToLocalDatePipe } from './pipes/toLocalDatePipe.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitizeHTML.pipe';

import { LOCALE_ID } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    TagelerListComponent,
    TagelerDetailsComponent,
    TagelerSmallCardComponent,
    TagelerLargeCardComponent,
    GroupDetailsComponent,
    GroupComponent,
    AdminComponent,
    FilterGroupByTypePipe,
    NextTagelerPipe,
    OtherTagelerPipe,
    TagelerByDate,
    TagelerByGroupAndByDate,
    PastTagelerByGroupAndByDate,
    ToLocalTimePipe,
    ToLocalDatePipe,
    SanitizeHtmlPipe,
    Autosize
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
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    ColorPickerModule,
  ],
  providers: [
    TagelerService,
    GroupService,
    DefaultPictureService,
    {provide: LOCALE_ID, useValue: "de-DE"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
