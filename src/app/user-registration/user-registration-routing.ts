import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/user-registration/login/login.component';
import { RegisterComponent } from 'src/app/user-registration/register/register.component';
import { ForgetComponent } from 'src/app/user-registration/forget/forget.component';
import { LostPasswordComponent } from 'src/app/user-registration/lost-password/lost-password.component';

const userRoutes: Routes = [
  { path:'', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'forget', component:ForgetComponent},
  { path:'lost-password', component:LostPasswordComponent},
 ];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class userRegistrationRoutingModule { }
