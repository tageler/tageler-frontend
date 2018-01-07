import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './groups/group/group.component';
import { TagelerListComponent } from './tagelers/tageler-list/tageler-list.component'
import { TagelerDetailsComponent } from './tagelers/tageler-details/tageler-details.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: GroupComponent },
  { path: 'tageler', component: TagelerListComponent},
  { path: 'tageler-details/:id', component: TagelerDetailsComponent},
  { path: 'group/:name', component: GroupDetailsComponent},
  { path: 'tageler/admin', component: AdminComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
