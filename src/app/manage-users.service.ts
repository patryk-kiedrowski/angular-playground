import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './test-users';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ManageUsersService {

  constructor(private messageService: MessageService) { }

  /*getUsers(): User[] {
    return USERS;
  }*/

  getUsers(): Observable<User[]> {
    this.messageService.add('Fetched users');
    return of(USERS);
  }

  getUser(index: number) {
    this.messageService.add('Fetched user ' + index);
    return USERS[index];
  }

  addUser(user: User): void {
    USERS.splice(user.id - 1, 0, user);
    this.messageService.add('New user added successfully, id: ' + user.id);
  }

  deleteUser(index: number): void {
    // BUG: when deleting first person continously, the free id is still 1
    USERS.splice(index, 1);
    this.messageService.add('User deleted successfully, free id: ' + (index + 1));
  }

  assignId(): number {

    for (let i = 0; i < USERS.length; i++) {

      if (USERS[i].id !== i + 1) {
        return i + 1;
      }
    }
    return USERS.length + 1;
  }

  updateUser(index: number, user: User) {
    USERS[index] = user;
    this.messageService.add('User ' + index + ' edited successfully');
  }
}
