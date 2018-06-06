import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-view', pathMatch: 'full' },
  { path: 'list-view', component: UserListComponent },
  { path: 'add-user', component: AddUserFormComponent },
  { path: 'grid-view', component: GridViewComponent },
  { path: 'edit-user/:id', component: EditUserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
