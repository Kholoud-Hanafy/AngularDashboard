import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../../../services/job-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applicants-card-group',
  standalone: true,
  imports: [CommonModule, RouterLink],
templateUrl: './applicants-card-group.component.html',
  styleUrls: ['./applicants-card-group.component.css'],
})
export class ApplicantsCardGroupComponent implements OnInit {
  appliedUsers: any[] = [];
  salary = 300;
  jobId: string | null = '';
  loading: boolean = true;
  page: number = 1;
  limit: number = 6;
  totalPages: number = 1;
  totalItems: number = 0;
  UserId: string| null  = '';

  constructor(
    private jobService: JobServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.jobId = paramMap.get('JobId');

      if (this.jobId) {
        this.fetchApplicants();
      }

      this.UserId = localStorage.getItem('userId');
    });
  }

  fetchApplicants() {
    this.loading = true;
    this.jobService.getJobById(this.jobId, this.page, this.limit).subscribe(
      (response) => {
        console.log('Response from server:', response);
        if (response && response.data) {
          this.appliedUsers = response.data;
          this.totalItems = response.totalItems;
          this.totalPages = Math.ceil(this.totalItems / this.limit);
          this.page = response.currentPage;
          console.log('Applied Users:', this.appliedUsers);
          console.log('This is jobId:', this.jobId);
        } else {
          console.error('Invalid response format or no data returned');
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching applied users:', error);
        this.loading = false;
      }
    );
  }

  get paginatedJobs() {
    const start = (this.page - 1) * this.limit;
    const end = start + this.limit;
    return this.appliedUsers.slice(start, end);
  }

  changePage(event: Event, page: number) {
    event.preventDefault();
    if (page >= 1 && page <= this.totalPages) {
      this.page = page;
      this.fetchApplicants();
    }
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  navigateToUserProfile(UserId:string) {
    // const userId = User.userId._id; 
  
    window.location.href = `https://react-app-nine-beryl.vercel.app/profile/${UserId}`;
  }

  // sendUserId(User:any){
    // const userId = localStorage.getItem('userId');
    // this.router.navigate(['/Company/applications', this.jobId]);
    
  // }

  removeCard(index: number) {
    this.appliedUsers.splice(index, 1);
  }

 
  sendUserId(userId: string) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('jobId', userId);
        this.router.navigate(['/Company/applications', this.jobId]);

  }
}
