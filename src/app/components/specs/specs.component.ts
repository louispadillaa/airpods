import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Spec {
  label: string;
  value: string;
}

interface Comparison {
  label: string;
  pulsePct: number;
  standardPct: number;
  unit: string;
}

@Component({
  selector: 'app-specs',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './specs.component.html',
})
export class SpecsComponent {
  readonly specs: Spec[] = [
    { label: 'Driver', value: '11mm dynamic, custom vent' },
    { label: 'Chip', value: 'Pulse H2 audio processor' },
    { label: 'Connectivity', value: 'Bluetooth 5.3, multipoint' },
    { label: 'Water resistance', value: 'IPX4, buds & case' },
    { label: 'Charging', value: 'USB‑C, Qi wireless' },
    { label: 'Weight', value: '4.8g bud / 38g case' },
  ];

  readonly comparisons: Comparison[] = [
    { label: 'Battery life', pulsePct: 100, standardPct: 60, unit: '30h vs 18h' },
    { label: 'Noise cancelled', pulsePct: 92, standardPct: 45, unit: '32dB vs 15dB' },
    { label: 'Charge speed', pulsePct: 85, standardPct: 40, unit: '10min → 3h vs 10min → 1h' },
  ];
}
