import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formReg: FormGroup;
  constructor(
    private userService:UserService,
    private router:Router
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
    this.userService.login(this.formReg.value).then(response => {
      this.router.navigate(['home']);
    }).catch(error => console.log(error));
  }

  onClick(){
    this.userService.loginWithGoogle().then(response => {
      this.router.navigate(['home']);
    }).catch(error => console.log(error));
  }
}
