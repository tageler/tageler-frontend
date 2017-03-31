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

import { AppComponent } from './app.component';
import { TagelerListComponent } from './tagelers/tageler-list/tageler-list.component';
import { TagelerDetailsComponent } from './tagelers/tageler-details/tageler-details.component';
import { UnitDetailsComponent } from './groups/group-details/group-details.component';
import { UnitListComponent } from './groups/group-list/group-list.component';

import { GroupService } from './groups/group.service';

import { TagelerService } from './tagelers/tageler.service';
import { TagelerComponent } from './tagelers/tageler/tageler.component';
import { AdminComponent } from './admin/admin.component';

import { FilterTagelerByUnitPipe } from './pipes/filterTagelerByUnit.pipe';
import { SameDateTagelerPipe } from './pipes/sameDateTageler.pipe';
import { CurrentTagelerPipe } from './pipes/currentTageler.pipe';
import { NextTagelerPipe } from './pipes/nextTageler.pipe';

import { LOCALE_ID } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    TagelerListComponent,
    TagelerDetailsComponent,
    UnitDetailsComponent,
    UnitListComponent,
    TagelerComponent,
    AdminComponent,
    FilterTagelerByUnitPipe,
    SameDateTagelerPipe,
    CurrentTagelerPipe,
    NextTagelerPipe,
  ],
  imports: [
    BrowserModule,
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
    { provide: LOCALE_ID, useValue: "de" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
