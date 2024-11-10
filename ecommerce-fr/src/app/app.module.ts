import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterScreenComponent } from './register/register-screen/register-screen.component';
import { InputComponent } from './shared/input/input.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core'; // Import this
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './register/login-screen/login-screen.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './DashBoard/dashboard/dashboard.component';
import { MainHomeComponent } from './DashBoard/main-home/main-home.component';
import { ProductsNewComponent } from './DashBoard/products/products-new/products-new.component';
import { ProductsComponent } from './DashBoard/products/products.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { TableV1Component } from './shared/table-v1/table-v1.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { UploadImageComponent } from './shared/upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    RegisterScreenComponent,
    DropdownComponent,
    LoginScreenComponent,
    SidemenuComponent,
    MainHomeComponent,
    TopbarComponent,
    DashboardComponent,
    ProductsComponent,
    TableV1Component,
    ProductsNewComponent,
    UploadImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
