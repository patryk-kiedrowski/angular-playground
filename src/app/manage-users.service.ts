import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './test-users';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ManageUsersService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }

  addUser(user: User) {
    // USERS.push(user);
    USERS.splice(user.id - 1, 0, user);
  }

  deleteUser(index: number) {
    USERS.splice(index, 1);
  }

  assignId(): number {

    for (let i = 0; i < USERS.length; i++) {

      if (USERS[i].id !== i + 1) {
        return i + 1;
      }
    }
    return USERS.length + 1;
  }
}
