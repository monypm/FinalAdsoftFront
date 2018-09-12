import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorHandlerService } from './services/error-handler.service';
import { AuthService } from './services/auth.service';

import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RetrieveProfileComponent } from './retrieve-profile/retrieve-profile.component';
import { DataService } from './services/data.service';
import { CrudService } from './services/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    RetrieveProfileComponent,
    LoginPageComponent,
    LoginComponent,
    LandingPageComponent,
    RegistrationPageComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ErrorHandlerService,
    AuthService,
    DataService,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
