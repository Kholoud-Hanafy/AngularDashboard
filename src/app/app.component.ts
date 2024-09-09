
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { RegisterTwoComponent } from './components/register-two/register-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplicantsComponent } from "./components/applicants/applicants.component";
// import { JobsApiService } from '../Services/jobs-api.service';
import { JobsComponent } from "./components/jobs/jobs/jobs.component";
import { PostJobComponent } from "./components/post-job/post-job.component";
import { CompanyapplicantsComponent } from './pages/CompanyApplicants/company/companyapplicants.component';
// import { BrowserModule } from '@angular/platform-browser';
import {NavBarComponent } from './components/NavBar/nav-bar/nav-bar.component'
// import { PasswordComponent } from './components/password/password.component';
// import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UpdateJobComponent } from './components/update-job/update-job.component';


@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    JobsComponent,
    NavBarComponent,
    PostJobComponent,
    CompanyapplicantsComponent,
    ApplicantsComponent,
    RegisterComponent,
    RegisterTwoComponent,
    ReactiveFormsModule,
    SignInComponent,
    CompanyapplicantsComponent,
    HttpClientModule,
    UpdateJobComponent

  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Careers-Angular-Dashboard";
}
