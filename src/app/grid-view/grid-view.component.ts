import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { ManageUsersService } from '../manage-users.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  users: User[];
  showPopUp = false;
  selectedUser: number;

  constructor(private manageService: ManageUsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  /*getUsers() {
    this.users = this.manageService.getUsers();
  }*/

  getUsers(): void {
    this.manageService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(index) {
    this.manageService.deleteUser(index);
    this.showPopUp = !this.showPopUp;
  }

  showPop(i: number) {
    if (i >= 0) {
      this.selectedUser = i;
    }

    this.showPopUp = !this.showPopUp;
  }
}
