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
  showPopUp = false;
  selectedUser: number;

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
    this.showPopUp = !this.showPopUp;
    console.log(this.users.length);
  }

  showPop(i: number) {
    if (i >= 0) {
      this.selectedUser = i;
    }

    this.showPopUp = !this.showPopUp;
  }
}
