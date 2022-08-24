import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {EmailValidator, FormControl, Validators, FormBuilder , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/Models/user.model';
import { LoginService } from 'src/app/service/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup 
  message = '';
  logins: user[] = [];
  loginone: user = {
    id: 0,
    FirstName: '',
    LastName: '',
    CNIC: '',
    Mobile: '',
    Password: '',
    Email: ''
  }


  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
  
  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router ) {
    
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  loginSubmit(){
    if(this.loginForm.value.email == '' || this.loginForm.value.email == undefined){
      return;
    }

    if(!this.loginForm.value.email.includes("@")){
      return;
    }

    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(user => {
        if(user){
          this.router.navigate(['/dash'])
        }
    })
  }


}
