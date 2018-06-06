import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ManageUsersService } from '../manage-users.service';
import { MessageService } from '../message.service';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  newId: number;
  newUser = new User(this.newId, '', '', '', '', '', '', '');
  errorMessage: string;

  editForm: FormGroup;

  constructor(
    private manageUsers: ManageUsersService,
    private messageService: MessageService,
    private formBuilder: FormBuilder) {
      this.createForm();
     }

  ngOnInit() {
  }

  addUser() {
    this.assignId();
    this.manageUsers.addUser(this.newUser);
    this.newUser = new User(this.newId, '', '', '', '', '', '', '');
  }

  addUserReactively() {
    if (this.editForm.status === 'VALID') {
      this.assignId();

      this.newUser.name = this.editForm.value.name;
      this.newUser.surname = this.editForm.value.surname;
      this.newUser.sex = this.editForm.value.sex;
      this.newUser.email = this.editForm.value.email;
      this.newUser.city = this.editForm.value.city;
      this.newUser.street = this.editForm.value.street;
      this.newUser.street_number = this.editForm.value.street_number;

      this.manageUsers.addUser(this.newUser);

      this.newUser = new User(this.newId, '', '', '', '', '', '', '');
      this.createForm();
    } else {
      this.errorMessage = 'fill all inputs with correct data!';
      this.messageService.add(this.errorMessage);
    }
  }

  assignId() {
    this.newUser.id = this.manageUsers.assignId();
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      name: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      surname: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      sex: ['', Validators.required],
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      street: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      street_number: new FormControl('', [ Validators.required ]),
    });
  }

  get name() {
    return this.editForm.get('name');
  }

  get surname() {
    return this.editForm.get('surname');
  }

  get sex() {
    return this.editForm.get('sex');
  }

  get email() {
    return this.editForm.get('email');
  }

  get city() {
    return this.editForm.get('city');
  }

  get street() {
    return this.editForm.get('street');
  }

  get street_number() {
    return this.editForm.get('street_number');
  }
}
