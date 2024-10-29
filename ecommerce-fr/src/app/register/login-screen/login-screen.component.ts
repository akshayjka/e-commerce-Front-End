import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private route : Router

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

}
