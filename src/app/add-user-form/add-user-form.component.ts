import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  newUser = new User(undefined, '', '', '', '', '', '', '');
  constructor() { }

  ngOnInit() {
  }

}
