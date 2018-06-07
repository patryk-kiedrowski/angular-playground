import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
import { ManageUsersService } from '../manage-users.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  users: User[];
  index: number;

  constructor(private route: ActivatedRoute,
    private manageService: ManageUsersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.updateIndex(+this.route.snapshot.paramMap.get('id'));
    this.getUsers();
  }

  updateIndex(id) {
    this.index = id;
  }

  getUsers(): void {
    this.manageService.getUsers().subscribe(users => this.users = users);
  }
}
