import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'grid-view', pathMatch: 'full' },
  { path: 'list-view', component: UserListComponent },
  { path: 'add-user', component: AddUserFormComponent },
  { path: 'grid-view', component: GridViewComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'detail-view/:id', component: DetailViewComponent },
  { path: 'table-view', component: TableViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
