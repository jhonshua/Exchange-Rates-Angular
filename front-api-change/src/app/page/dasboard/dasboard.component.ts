import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css'
})
export default class DasboardComponent {


  constructor(private authService: AuthService) {}

// methods
  logout(): void {
    this.authService.logout()
  }

}
