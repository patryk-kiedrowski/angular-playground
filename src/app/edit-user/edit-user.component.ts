import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ManageUsersService } from '../manage-users.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  index: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private manageService: ManageUsersService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.updateIndex(+this.route.snapshot.paramMap.get('id'));
    this.user = this.manageService.getUser(this.index);
  }

  updateIndex(id) {
    this.index = id;
  }

  updateUser() {
    this.manageService.updateUser(this.index, this.user);
  }
}
