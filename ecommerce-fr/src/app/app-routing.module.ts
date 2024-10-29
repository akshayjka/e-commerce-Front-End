import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './register/login-screen/login-screen.component';
import { RegisterScreenComponent } from './register/register-screen/register-screen.component';
import { InputComponent } from './shared/input/input.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterScreenComponent
  },
  {
    path:'input',
    component:InputComponent
  },
  {
    path : 'login',
    component : LoginScreenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
