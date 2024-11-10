import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterServicesService } from 'src/app/services/register-services.service';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent implements OnInit {

  registerForm:FormGroup;
  isrequired:boolean = true;

  isLoginScreen:boolean = true;



  // API AUTHENTICATION....
   username:any = 'test';
   password:any = 'test@123';

  genders = [
    { value: 'MALE', label: 'Male' },
    { value: 'FEMALE', label: 'Female' },
    { value: 'OTHER', label: 'Other' }
  ];

  constructor(
    private fb:FormBuilder, 
    private registerService:RegisterServicesService,
  ) {
    this.registerForm = this.fb.group({
      name : ['', Validators.required],
      email : ['',[Validators.required, Validators.email]],
      password : [''],
      dob:[null] ,
      gender : ['', Validators.required],
      street : [''],
      area :[''],
      city: [''],
      state : [''],
      postal_code : [''],
      mobile_number : ['', Validators.required],
    })
   }

   get genderControl(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Form on submit");
    this.registerService.createUserApi(this.registerForm.value).subscribe((data:any)=>{
      console.log("The resposne after creating the user", this.registerForm.value.dob);
        this.registerService.openSnackBar(5000,'User Created Successfully!!', 'center', 'bottom');
        this.toggleFlip();
    },
  error =>{
    console.error('Error : ', error);
    this.registerService.openSnackBar(5000, 'Error occurred while creating user!', 'center', 'bottom');
    })
  }

  toggleFlip() {
    this.isLoginScreen = !this.isLoginScreen;
  }

  cancel() {
    this.registerForm.reset();
  }

  gotoLogin() {
    this.toggleFlip();
  }

  gotoRegister(event:any) {
    console.log("The event emitter from login Component to Child Component : ",event);
    this.toggleFlip();
  }



}
