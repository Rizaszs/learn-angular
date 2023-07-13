import { Component } from '@angular/core';
import { RouterService } from './router.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyek-tailwind';
  currentYear: number;

  constructor(public routerService: RouterService) {
    this.currentYear = new Date().getFullYear();
  }
}
