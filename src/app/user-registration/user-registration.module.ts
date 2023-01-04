import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/user-registration/login/login.component';
import { RegisterComponent } from 'src/app/user-registration/register/register.component';
import { ForgetComponent } from 'src/app/user-registration/forget/forget.component';
import { LostPasswordComponent } from 'src/app/user-registration/lost-password/lost-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    LostPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class userRegistrationModule { }
