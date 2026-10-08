import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly columns = [
    {
      title: 'Product',
      links: ['Design', 'Colors', 'Specs', 'Reviews'],
    },
    {
      title: 'Support',
      links: ['Shipping', 'Warranty', 'Returns', 'Contact'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press'],
    },
  ];
}
