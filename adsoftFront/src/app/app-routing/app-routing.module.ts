import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

//Import guards

//Import components
import { LoginComponent } from '../login/login.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';
import { RetrieveProfileComponent } from '../retrieve-profile/retrieve-profile.component';



const routes: Routes = [
  // General
  { path:'login', component: LoginComponent},
  { path: 'home', component: LandingPageComponent},
  { path: 'register', component: RegistrationPageComponent},

  // Perfil
  { path: 'profile', component: RetrieveProfileComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }