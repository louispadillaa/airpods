import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Feature {
  title: string;
  description: string;
  icon: 'wave' | 'battery' | 'drop' | 'orbit';
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  readonly features: Feature[] = [
    {
      title: 'Active Noise Cancelling',
      description:
        'Dual-mic beamforming listens to the room 200 times a second and cancels it before it reaches your ear.',
      icon: 'wave',
    },
    {
      title: 'All-Day Charge',
      description:
        'Thirty hours across the case, five on a single bud. Ten minutes in the case buys three more hours.',
      icon: 'battery',
    },
    {
      title: 'Sweat & Weather Resistant',
      description: 'IPX4-rated buds and case shrug off rain, spin class, and everything in between.',
      icon: 'drop',
    },
    {
      title: 'Spatial Audio',
      description:
        'Dynamic head tracking wraps sound around you, so a stereo mix suddenly has a room to live in.',
      icon: 'orbit',
    },
  ];
}
