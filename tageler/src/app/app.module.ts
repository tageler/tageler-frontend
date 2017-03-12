import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { TagelerListComponent } from './tagelers/tageler-list/tageler-list.component';
import { TagelerDetailsComponent } from './tagelers/tageler-details/tageler-details.component';
import { UnitDetailsComponent } from './units/unit-details/unit-details.component';
import { UnitListComponent } from './units/unit-list/unit-list.component';

import { UnitService } from './units/unit.service';

import { TagelerService } from './tagelers/tageler.service';
import { TagelerComponent } from './tagelers/tageler/tageler.component';

@NgModule({
  declarations: [
    AppComponent,
    TagelerListComponent,
    TagelerDetailsComponent,
    UnitDetailsComponent,
    UnitListComponent,
    TagelerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2DropdownModule,
    AppRoutingModule
  ],
  providers: [
    TagelerService,
    UnitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
