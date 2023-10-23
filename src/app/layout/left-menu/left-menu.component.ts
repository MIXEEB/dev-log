import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/routes';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  routes = routes;

  constructor(private router: Router) { }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
