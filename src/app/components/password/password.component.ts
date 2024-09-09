import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompanyBackService } from '../../services/company-back.service'; 





@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private companyBackService: CompanyBackService 
  ) {
    this.forgetPasswordForm = this.formBuilder.group({
      companyEmail: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const emailControl = this.forgetPasswordForm.get('companyEmail');
  
    if (emailControl && emailControl.invalid && emailControl.touched) {
      if (emailControl.errors?.['required']) {
        alert('Please enter an email address');
      } else if (emailControl.errors?.['email']) {
        alert('Please enter a valid email address');
      }
    } else {
      if (this.forgetPasswordForm.valid) {
        const { companyEmail } = this.forgetPasswordForm.value;
        this.companyBackService.sendMail(companyEmail).subscribe(
          response => {
            console.log('OTP sent successfully:', response);
          
          },
          error => {
            console.log('Error sending OTP:', error);
       
          }
        );
      } else {
        console.log('Form is invalid');
      }
    }
  }
}
