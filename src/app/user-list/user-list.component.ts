import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ManageUsersService } from '../manage-users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private manageService: ManageUsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  /*getUsers(): void {
    this.users = this.manageService.getUsers();
  }*/

  getUsers(): void {
    this.manageService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(index) {
    this.manageService.deleteUser(index);
    console.log(this.users.length);
  }
}
