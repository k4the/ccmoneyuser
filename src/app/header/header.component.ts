import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { slideDown } from '../animations/slide-down.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideDown]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  minBrowserWidth = 760;
  slideDownState = 'closed';
  showSubMenus = true;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (window.innerWidth > this.minBrowserWidth) {
      this.showSubMenus = false;
    }
    this.isLoggedIn = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isLoggedIn = isAuthenticated;
      });
  }

  goto(path: string): void {
    this.slideDownState = 'closed';
    this.router.navigate([path]);
  }

  toggleMenu(event?: any): void {
    if (window.innerWidth < this.minBrowserWidth) {
      this.slideDownState === 'closed'
        ? (this.slideDownState = 'open')
        : (this.slideDownState = 'closed');
    }
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
