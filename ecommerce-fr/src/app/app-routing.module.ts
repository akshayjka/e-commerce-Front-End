import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './DashBoard/main-home/main-home.component';
import { ProductsComponent } from './DashBoard/products/products.component';
import { LoginScreenComponent } from './register/login-screen/login-screen.component';
import { RegisterScreenComponent } from './register/register-screen/register-screen.component';
import { InputComponent } from './shared/input/input.component';
import { TopbarComponent } from './shared/topbar/topbar.component';

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
  },
  {
    path : 'home',
    component : MainHomeComponent
  },
  {
    path : 'topbar',
    component : TopbarComponent
  },
  {
    path : 'product',
    component : ProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
