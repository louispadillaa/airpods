import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  loaded = false;

  readonly stats = [
    { value: '30h', label: 'Total playback' },
    { value: '-32dB', label: 'Active noise cancelling' },
    { value: '4.8g', label: 'Per earbud' },
  ];

  readonly marquee = [
    'Adaptive EQ',
    'Spatial Audio',
    'Sweat Resistant',
    'MagSafe Charging',
    'Transparency Mode',
    'Find My',
  ];

  ngOnInit(): void {
    // trigger the CSS entrance sequence a tick after paint
    setTimeout(() => (this.loaded = true), 60);
  }
}
