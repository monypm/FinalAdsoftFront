import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorHandlerService } from './services/error-handler.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    MatSnackBarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ErrorHandlerService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
