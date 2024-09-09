import { Component, OnInit } from '@angular/core';
import { ApplicantDetailsService } from '../../services/applicant-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../models/iuser';
import { CommonModule } from '@angular/common';
import { AdditionalQuestions } from '../../models/additional-questions';
import { IAppliedJob } from '../../models/iapplied-job';
import { User } from '../../models/User';
import { JobServiceService } from '../../services/job-service.service';
import { Jobs } from '../../models/jobs';

@Component({
  selector: 'app-applicants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.css'
})
export class ApplicantsComponent implements OnInit {
  jobId: string | any = '';
  userId: string | any = '';
  job: Jobs = {} as Jobs;
  jobSeeker: Iuser | null = null;
  qusetions: AdditionalQuestions = {} as AdditionalQuestions;
  applicantAnswers: IAppliedJob = {} as IAppliedJob;
  constructor(private _applicantDetailsService: ApplicantDetailsService, private _activedRoute: ActivatedRoute, private router: Router, private _jobService: JobServiceService) { }
  ngOnInit(): void {

      this._activedRoute.paramMap.subscribe((paramMap) => {
      this.jobId = paramMap.get('JobId');
      console.log(paramMap);
      
      this.userId = localStorage.getItem('userId');
    })
    console.log('44',this.jobId,this.userId);
    


    this._applicantDetailsService.getAdditionalQuestionsById(this.jobId).subscribe({
      next: (res) => {
        this.qusetions = res;
        console.log("qusetions", res)
      },
      error: (err) => {
        console.log(err)
      }
    })

    this._applicantDetailsService.getAppliedUserById(this.userId).subscribe({
      next: (res) => {
        this.jobSeeker = res;
        console.log("appliedUser", res)
      },
      error: (err) => {
        console.log(err)
      }
    });
    this._applicantDetailsService.getAnswerUser(this.jobId, this.userId).subscribe({
      next: (res) => {
        this.applicantAnswers = res;
        console.log("answer", res);
      },
      error: (err) => {
        console.log(err);
      }
    })
    //  if (this.applicantAnswers.additionalFormSubmitted===true) {
    //   console.log("helllllllll");
    //  this.router.navigate(['/profile', this.userId]);
    // }
    if (!this.applicantAnswers.additionalFormSubmitted) {
      console.log('wwwwwwwwwwww', this.applicantAnswers.additionalFormSubmitted);

    }
    this._jobService.getJobById(this.jobId).subscribe({
      next: (res) => {
        this.job = res;
        console.log("job", res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  acceptUser() {
  }
  navigateToCandidates() {
    window.location.href = `https://react-app-nine-beryl.vercel.app/profile/${this.userId}`;
  }
}


