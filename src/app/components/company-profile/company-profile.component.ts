import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CompanyBackService } from '../../services/company-back.service';
import { Company } from '../../models/company';
import { NavBarComponent } from '../NavBar/nav-bar/nav-bar.component';



@Component({
  selector: 'company-profile',
  standalone: true,
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css'],
  imports: [CommonModule, HttpClientModule,NavBarComponent]
})
export class CompanyProfileComponent implements OnInit {
  selectedCompany?: Company;
  jobs: any[] = []; 
 

  constructor(private companyService: CompanyBackService) {}

  ngOnInit(): void {
    this.loadCompanyProfile();
    // this.loadJobs(); 
  }

  loadCompanyProfile(): void {
    const companyInfo = localStorage.getItem('companyInfo');
    if (companyInfo) {
      const companyData = JSON.parse(companyInfo);
      const companyId = companyData.id;
      console.log('Company ID from localStorage:', companyId);

      this.companyService.getCompanyById(companyId).subscribe(
        (response: any) => {
          if (response.message === 'success' && response.data) {
            this.selectedCompany = response.data;
            console.log('Company data fetched:', this.selectedCompany);
          } else {
            console.error('Unexpected response format:', response);
          }
        },
        (error) => {
          console.error('Error fetching company data:', error);
        }
      );
    } else {
      console.warn('No company info found in localStorage');
    }
  }


  loadJobs(): void {
    if (this.selectedCompany) {
      this.companyService.getCompanyById(this.selectedCompany.companyName).subscribe(
        (response: any) => {
          if (response.jobs && response.jobs.length > 0) {
            this.jobs = response.jobs;
            console.log('Jobs fetched:', this.jobs);
          } else {
            console.warn('No jobs found for the company');
          }
        },
        (error: any) => {
          console.error('Error fetching jobs:', error);
        }
      );
    }
  }
}