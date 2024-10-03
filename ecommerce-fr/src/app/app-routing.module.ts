import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterScreenComponent } from './register/register-screen/register-screen.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
