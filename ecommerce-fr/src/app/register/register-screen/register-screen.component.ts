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

   username:any = 'test';
   password:any = 'test@123';


  genders = [
    { value: 'MALE', label: 'Male' },
    { value: 'FEMALE', label: 'Female' },
    { value: 'OTHER', label: 'Other' }
  ];

  constructor(private fb:FormBuilder, private registerService:RegisterServicesService) {
    this.registerForm = this.fb.group({
      name : ['', Validators.required],
      email : ['',[Validators.required, Validators.email]],
      password : [''],
      dob:[''],
      gender : ['', Validators.required],
      street : [''],
      area :[''],
      city: [''],
      state : [''],
      postalCode : [''],
      mobileNumber : ['', Validators.required],
    })
   }

   get genderControl(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }
  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Form on submit");
    this.registerService.createUserApi(this.registerForm.value, this.username, this.password).subscribe((data:any)=>{
      console.log("The resposne after creating the user", data)
    },
  error =>{
    console.error('Error : ', error);
    })
  }

  registerUser() {
    
  }

}
