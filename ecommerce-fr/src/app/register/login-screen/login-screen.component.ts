import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServicesService } from 'src/app/services/register-services.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  loginForm:FormGroup;

  @Output() messageEvent = new EventEmitter<any>();

  constructor(
    private fb:FormBuilder,
    private route : Router,
    private service : RegisterServicesService

  ) { 
    this.loginForm = this.fb.group({
      email : ['', Validators.required, Validators.email],
      password : ['']
    })
  }

  ngOnInit(): void {
  }

  gotoRegister() {
    console.log("the value");
    this.messageEvent.emit("Go to Login Component")
  }

  clearForm() {
    this.loginForm.reset();
  }

  toLogin() {
    const loginDto = {
      email : this.loginForm.value.email,
      password : this.loginForm.value.password
    }
    this.service.loginUserApi(loginDto).subscribe((loginRes:any)=>{
      if(loginRes.statuscode === 200 && loginRes.token != null) {
        this.service.setToken(loginRes.token);
        localStorage.setItem("token",loginRes.token);
      this.service.openSnackBar(5000,'Login SuccessFull !!', 'center', 'bottom');
      this.route.navigateByUrl('/home')
    }
    },
  (error) => {
    this.service.openSnackBar(5000,'Login Failed Invalid Credentials', 'center', 'bottom')
  }
  )
  }
}
