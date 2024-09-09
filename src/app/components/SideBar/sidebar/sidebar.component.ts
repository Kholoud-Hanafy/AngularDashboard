import { Component } from '@angular/core';
import { Router, RouterLink,RouterLinkActive } from '@angular/router';
import { OnInit
  
 } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class CompanySidebarComponent implements OnInit {
  activeItem: string = 'dashboard';



  constructor(private router:Router) {}

  ngOnInit(): void {}

  handleItemClick(item: string) {
    this.activeItem = item;
  }



  logOut()
  {
    localStorage.clear();
    this.router.navigate(["/home"])
  }
}