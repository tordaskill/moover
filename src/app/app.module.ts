import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    RegistrationformComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
RouterModule.forRoot([
  {
    path: 'registration',
    component: RegistrationformComponent
    },
  
  
  {
path: '**',
component: HomepageComponent
}

])



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
