import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  progress = 0;

  readonly links = [
    { label: 'Design', href: '#features' },
    { label: 'Colors', href: '#showcase' },
    { label: 'Specs', href: '#specs' },
    { label: 'Reviews', href: '#reviews' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 12;

    const doc = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    this.progress = total > 0 ? (window.scrollY / total) * 100 : 0;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
