import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faBullhorn, faLock, faUserTie, faPenFancy, faChartLine, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { NavBarComponent } from '../../../../components/NavBar/nav-bar/nav-bar.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  isActive: { [key: string]: boolean } = {}; 
  isRtl = false;

  accordionItems = [
    { title: 'Who we are?', content: 'Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.' },
    { title: "What's our goal", content: 'Content for our goal goes here.' },
    { title: 'Our vision', content: 'Content for our vision goes here.' }
  ];

  toggleAccordion(item: any) {
    this.isActive[item.title] = !this.isActive[item.title];
  }



  faBullhorn = faBullhorn;
  faLock = faLock;
  faUserTie = faUserTie;
  faPenFancy = faPenFancy;
  faChartLine = faChartLine;
  faHeadset = faHeadset;
  faCheck = faCheck;

  jobSeekerStats = [
    {
      value: '30k+',
      title: 'Job Seeker',
      description: 'We always provide people a complete solution upon focused of any business.'
    },
    {
      value: '10k+',
      title: 'Vacant jobs',
      description: 'We always provide people a complete solution upon focused of any business.'
    },
    {
      value: '20k+',
      title: 'Company',
      description: 'We always provide people a complete solution upon focused of any business.'
    }
  ];
  categories = [
    { name: 'Markting', icon: this.faBullhorn, highlight: true },
    { name: 'Accounting / Finance', icon: this.faHeadset },
    { name: 'Human Resource', icon: this.faUserTie },
    { name: 'Security Analyst', icon: this.faLock },
    { name: 'Management', icon: this.faChartLine },
    { name: 'Content Creator', icon: this.faPenFancy },
  ];

}
