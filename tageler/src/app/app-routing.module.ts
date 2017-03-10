import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagelerComponent } from './tagelers/tageler/tageler.component';
import { TagelerListComponent } from './tagelers/tageler-list/tageler-list.component'
import { UnitListComponent } from './units/unit-list/unit-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TagelerComponent},
  { path: 'tageler', component: TagelerListComponent },
  { path: 'unit', component: UnitListComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
