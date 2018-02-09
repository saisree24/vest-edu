import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AppRoutingModule } from './/app-routing.module';

import { AdminModule } from './admin/admin.module';
import { BorrowerModule } from './borrower/borrower.module';
import { InvestorModule } from './investor/investor.module';
import { UserOnboardingModule } from './user-onboarding/user-onboarding.module';

import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    AdminModule,
    BorrowerModule,
    InvestorModule,
    UserOnboardingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
