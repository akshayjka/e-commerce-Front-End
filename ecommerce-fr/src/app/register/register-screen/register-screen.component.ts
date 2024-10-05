import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.registerForm = this.fb.group({
      userName : ['',Validators.required],
      email : [''],
      password : [''],
      mobileNumber : [''],
      street : [''],
      city: [''],
      state : [''],
      postalCode : [''],
      dob:[''],
      gender : ['']
    })
   }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Form on submit")
  }

}
