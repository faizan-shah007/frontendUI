import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/user.model';
import { userService } from 'src/app/service/user.service';
import {catchError} from 'rxjs/operators'

@Component({
  selector: 'app-register-sign-up',
  templateUrl: './register-sign-up.component.html',
  styleUrls: ['./register-sign-up.component.scss']
})

export class RegisterSignUpComponent implements OnInit {

  users: user[] = [];
  userone: user = {
    id: 0,
    FirstName: '',
    LastName: '',
    CNIC: '',
    Mobile: '',
    Password: '',
    Email: ''
  }


  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.userService.getAllUser().subscribe(response => {
      this.users = response;
    });
  }

  onSubmit() {

    if (this.userone.id === 0) {
      this.userService.addUser(this.userone)
        .subscribe(
          response => {
            console.log(response);
            const newusers = [...this.users, response as user];
            this.users = newusers;
            this.userone = {
              id: 0,
              FirstName: '',
              LastName: '',
              CNIC: '',
              Mobile: '',
              Password: '',
              Email: ''
            };
          }
        )
    } else {
      this.updateUser(this.userone);
    }
  }


  updateUser(userone: user)
 {
    this.userService.updateUser(userone)
    .subscribe(response =>
      {
        this.getAllUser();
      });
 }
}
