import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Colorway {
  name: string;
  hex: string;
  hexSoft: string;
  copy: string;
}

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './showcase.component.html',
})
export class ShowcaseComponent {
  readonly colorways: Colorway[] = [
    {
      name: 'Graphite',
      hex: '#2A2A2E',
      hexSoft: '#3A3A3F',
      copy: 'Matte and unreflective — the pair that disappears in a bag or a boardroom.',
    },
    {
      name: 'Porcelain',
      hex: '#F5F5F7',
      hexSoft: '#E4E4E7',
      copy: 'The original finish. Bright, clinical, and quietly confident.',
    },
    {
      name: 'Dune',
      hex: '#D8B4A0',
      hexSoft: '#C9A088',
      copy: 'A warm rose-gold cast that catches light instead of hiding from it.',
    },
    {
      name: 'Ripple',
      hex: '#7DF9FF',
      hexSoft: '#5FD6DE',
      copy: 'A limited icy-cyan run for the spatial-audio launch. While supplies last.',
    },
  ];

  readonly activeIndex = signal(0);

  get active(): Colorway {
    return this.colorways[this.activeIndex()];
  }

  select(index: number): void {
    this.activeIndex.set(index);
  }
}
