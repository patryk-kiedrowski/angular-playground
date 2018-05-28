import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ManageUsersService } from '../manage-users.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  newId: number;
  newUser = new User(this.newId, '', '', '', '', '', '', '');

  constructor(private manageUsers: ManageUsersService) { }

  ngOnInit() {
  }

  addUser() {
    this.assignId();
    this.manageUsers.addUser(this.newUser);
    this.newUser = new User(this.newId, '', '', '', '', '', '', '');
  }

  assignId() {
    this.newUser.id = this.manageUsers.assignId();
  }

}
