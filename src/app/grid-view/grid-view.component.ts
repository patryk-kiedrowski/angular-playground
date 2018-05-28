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

  constructor(private manageService: ManageUsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.manageService.getUsers();
  }

  deleteUser(index) {
    this.manageService.deleteUser(index);
  }

}
