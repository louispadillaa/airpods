import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Review {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  readonly reviews: Review[] = [
    {
      quote:
        'The noise cancelling finally makes an open-plan office bearable. I forget I have them in until the battery warning shows up — two days later.',
      name: 'Marina Ortiz',
      role: 'Product designer',
      rating: 5,
    },
    {
      quote:
        'Spatial audio on a plane is a genuinely different experience. The case fits in a coin pocket, which sounds trivial until you travel with it.',
      name: 'Daniel Reyes',
      role: 'Software engineer',
      rating: 5,
    },
    {
      quote: 'Sweat resistance is real — six months of training runs and no dropouts. The fit stays put through burpees, which is rare.',
      name: 'Priya Shah',
      role: 'Run coach',
      rating: 4,
    },
  ];

  stars(count: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i < count ? 1 : 0);
  }
}
