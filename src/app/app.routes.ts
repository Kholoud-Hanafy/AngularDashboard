import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home/home/home.component"
import { PostJobComponent } from './components/post-job/post-job.component';
import { CompanyapplicantsComponent } from "./pages/CompanyApplicants/company/companyapplicants.component";
import { CandidatesComponent } from "./pages/Candidates/candidates/candidates.component";
import { MyProfileComponent } from "./pages/MyProfile/my-profile/my-profile.component";
import { SavedCandidatesComponent } from "./pages/SavedCadidates/saved-candidates/saved-candidates.component";
import { ApplicationsComponent } from "./pages/Applications/applications/applications.component";
import { DashboardComponent } from "./pages/Dashboard/dashboard/dashboard.component";
import { ApplicantsCardGroupComponent } from "./components/applicantsCardGroup/applicants-card-group/applicants-card-group.component";
import { JobsComponent } from "./components/jobs/jobs/jobs.component";
import { RegisterComponent } from "./components/register/register.component";
import { RegisterTwoComponent } from "./components/register-two/register-two.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AdditionalQuestionsComponent } from "./components/additional-questions/additional-questions.component";
import { UpdateJobComponent } from "./components/update-job/update-job.component";
import { NotfoundComponent } from "./pages/NotFound/NotFound/notfound/notfound.component";
import { CompanyProfileComponent } from "./components/company-profile/company-profile.component";
import { ResetPasswordComponent } from "./components/resetPass/resetpass/resetpass.component";
import {ApplicantsComponent} from './components/applicants/applicants.component'
import { PasswordComponent } from "./components/password/password.component";


export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "Register", component: RegisterComponent },
  { path: "two", component: RegisterTwoComponent },
  { path: "sign", component: SignInComponent },

  {
    path: "Company",
    component: CompanyapplicantsComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: 'addJob', component: PostJobComponent },
      { path: 'AdditionalQuestions/:id', component: AdditionalQuestionsComponent },
      { path: 'theJobs', component: JobsComponent },
      { path: "applicantcards/:JobId", component: ApplicantsCardGroupComponent },
      { path: "editprofile", component: MyProfileComponent },
      { path: 'update-job/:id', component: UpdateJobComponent },
      { path: "reset", component: PasswordComponent },
      { path: "applications/:JobId", component: ApplicantsComponent },
       { path: "candidates", component: CandidatesComponent },
    ],
  }, {path: "myProfile", component: CompanyProfileComponent},
  
 
  { path: "**", component: NotfoundComponent }
];
