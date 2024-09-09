










import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CompanyserviceService } from '../../../services/companyservice.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  company: any = {};
  theCompany:any = {}
  isNavbarCollapsed = true;
  constructor(
    private _companyService: CompanyserviceService,
    private _activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    const companyInfo = localStorage.getItem('companyInfo');
    console.log(companyInfo)

    if (companyInfo) {
      this.company = JSON.parse(companyInfo);
      this._companyService.getCompanyDetails(this.company.id).subscribe((response) => {
        if (response && response.message === 'success') {
          // this.company = response.data;
          
          this.theCompany = response.data
          console.log(this.theCompany);
        }
      });
    }


    // this._activatedRouter.paramMap.subscribe((paramMap) => {
    //   this.companyId = paramMap.get('companyId');
    //   if (this.companyId) {
    //     this.getById();
    //   }
    // });
  }

  // getById() {
  //   if (this.companyId) {
  //     this._companyService.getCompanyDetails(this.companyId).subscribe((response) => {
  //       if (response && response.message === 'success') {
  //         this.company = response.data;
  //         console.log(this.company);
  //       }
  //     });
  //   }
  // }
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');}

 navigateToCandidates(){
   window.location.href = `https://react-app-nine-beryl.vercel.app/candidates`
}


}


























