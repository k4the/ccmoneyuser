import { Component } from '@angular/core';
import { slideDown } from '../animations/slideDown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    slideDown
  ]
})
export class HeaderComponent {
  minBrowserWidth = 760;
  slideDownState = 'open';

  constructor(private router: Router) {}

  toggleMenu(event?: any): void {
    if (window.innerWidth < this.minBrowserWidth) {
      (this.slideDownState === 'closed') ? this.slideDownState = 'open' : this.slideDownState = 'closed';
    }
  }

  gotoPage(page: string): void {
    this.slideDownState = 'closed';
    this.router.navigate([page]);
  }
}
