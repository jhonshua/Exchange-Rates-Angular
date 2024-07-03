import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',

})
export class HeaderComponent {

  public isAuth: boolean = false; // Initialize with false

  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }
}

