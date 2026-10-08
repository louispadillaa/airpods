import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './cta.component.html',
})
export class CtaComponent {}
