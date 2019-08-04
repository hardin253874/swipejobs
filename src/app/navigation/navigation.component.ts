import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  isNavbarCollapsed = true;
  showDropdown = true;
  ngOnInit() {
  }

  toggleDropdown() {
    this.showDropdown = false;
  }
  collapseMenu() {
    if (!this.isNavbarCollapsed) {
      this.isNavbarCollapsed = true;
    }
  }
}
