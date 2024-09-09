import { Component } from '@angular/core';
// import { SidebarComponent } from '../../../components/SideBar/sidebar/sidebar.component'
import {CompanySidebarComponent} from '../../../components/SideBar/sidebar/sidebar.component'

import { RouterOutlet } from '@angular/router';
import { ApplicantsCardGroupComponent } from '../../../components/applicantsCardGroup/applicants-card-group/applicants-card-group.component'
import {NavBarComponent} from '../../../components/NavBar/nav-bar/nav-bar.component'


@Component({
  selector: 'app-companyapplicants',
  standalone: true,
  imports: [ RouterOutlet,CompanySidebarComponent ,ApplicantsCardGroupComponent,NavBarComponent],

templateUrl: './companyapplicants.component.html',
  styleUrl: './companyapplicants.component.css'
})
export class CompanyapplicantsComponent {

}