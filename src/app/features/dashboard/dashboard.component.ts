import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Dashboard',
        link: './dashboard',
        index: 0,
      },
      {
        label: 'Track Expenses',
        link: './expenses',
        index: 1,
      },
      {
        label: 'Accounts',
        link: './accounts',
        index: 2,
      },
      {
        label: 'Categories',
        link: './categories',
        index: 3,
      },
      {
        label: 'Reports',
        link: './accounts',
        index: 4,
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}
