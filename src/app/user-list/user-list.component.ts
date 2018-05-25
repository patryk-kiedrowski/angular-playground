import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../test-users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = USERS;
  /*users = [
    new User (1, 'Jim', 'Craig', 'male', 'jim.craig@company.com'),
    new User (2, 'Victor', 'Russel', 'male', 'victor.russel@company.com'),
    new User (3, 'Nina', 'McDaniel', 'female', 'nina.mcdaniel@company.com'),
    new User (4, 'Otis', 'Washington', 'male', 'otis.washington@company.com'),
    new User (5, 'Carroll', 'Terry', 'female', 'carrol.terry@company.com'),
    new User (6, 'Lynn', 'Marsh', 'female', 'lynn.marsh@company.com'),
    new User (7, 'Bertha', 'Bailey', 'female', 'bertha.bailey@company.com'),
    new User (8, 'Luz', 'Gordon', 'male', 'luz.gordon@company.com'),
    new User (9, 'Pauline', 'Weaver', 'female', 'pauline.weaver@company.com'),
    new User (10, 'Vernon', 'Sparks', 'male', 'vernon.sparks@company.com')
  ];*/
  constructor() { }

  ngOnInit() {
  }

}
