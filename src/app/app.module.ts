import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { UserListComponent } from './user-list/user-list.component';

import { AppRoutingModule } from './app-routing.module';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ViewEncapsulation } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddUserFormComponent,
    UserListComponent,
    GridViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
