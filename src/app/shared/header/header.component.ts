import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment.development'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',

})
export class HeaderComponent {

  baseUrl: any = environment.apiUrl;

  constructor(
    private authService: AuthService,
  ) {}

  public isAuth: boolean = false; // Initialize with false

  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }

  logout(): void {
    this.authService.logout();
  }




}

