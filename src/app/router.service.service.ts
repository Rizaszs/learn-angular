import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  activeLink: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveLink(event.urlAfterRedirects);
      }
    });
  }

  setActiveLink(url: string) {
    this.activeLink = url;
  }
}
