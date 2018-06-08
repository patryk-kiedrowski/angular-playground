import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { UserListComponent } from './user-list/user-list.component';

import { AppRoutingModule } from './app-routing.module';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ViewEncapsulation } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddUserFormComponent,
    UserListComponent,
    GridViewComponent,
    MessagesComponent,
    EditUserComponent,
    DetailViewComponent,
    TableViewComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
