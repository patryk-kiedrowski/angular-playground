import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private manageService: ManageUsersService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

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

  createForm() {
    this.editForm = this.formBuilder.group({
      name: '',
      surname: '',
      sex: '',
      email: '',
      city: '',
      street: '',
      street_number: ''
    });

    /* DOESN'T WANT TO WORK; USED TO POPULATE FORMS WITH VALUES
      this.editForm.setValue({
      name: this.user.name,
      surname: this.user.surname,
      sex: this.user.sex,
      email: this.user.email,
      city: this.user.city,
      street: this.user.street,
      street_number: this.user.street_number
    });
    */
  }
}
