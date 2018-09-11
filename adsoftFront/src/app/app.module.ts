import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModuleModule} from './material-module/material-module.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RetrieveProfileComponent } from './retrieve-profile/retrieve-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    RetrieveProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
