import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { TagelerDetailsComponent } from './tagelers/tageler-details/tageler-details.component';
import { TagelerComponent } from './tagelers/tageler/tageler.component';
import { TagelerListComponent } from './tagelers/tageler-list/tageler-list.component'
import { UnitListComponent } from './units/unit-list/unit-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', component: TagelerDetailsComponent },
  { path: '', pathMatch: 'full', component: TagelerComponent},
  { path: 'tageler', component: TagelerListComponent },
  { path: 'unit', component: UnitListComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
