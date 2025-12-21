import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './portfolio-form.html',
  styleUrl: './portfolio-form.scss',
})
export class PortfolioForm {
  // Dummy submit handling
  onSubmit(form?: NgForm) {
    if (form && form.valid) {
      console.log('Form Submitted:', form.value);
    } else {
      console.log('Form Submitted!');
    }
  }
}
