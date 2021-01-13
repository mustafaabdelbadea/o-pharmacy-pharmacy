import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MapsComponent } from './maps/maps.component'
const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'requestreset', component: RequestResetComponent },
  //take token from ts file and send it backend
  { path: 'pharmacyForgotPassword/:token', component: ResponseResetComponent },
  { path: 'pharmacyVerifyEmail/:token', component: VerifyEmailComponent },
  { path: 'maps', component: MapsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
