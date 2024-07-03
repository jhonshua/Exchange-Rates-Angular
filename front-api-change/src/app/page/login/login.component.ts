import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent {



  onSubmit() {
    throw new Error('Method not implemented.');
  }

  email: string = '';
  password: string = '';



  constructor(private authService: AuthService, private router: Router) {}


  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: () =>{
        this.authService.setLoginSuccess(true);
        this.router.navigate(['/dasboard']);
      } ,
      error: (err) => console.error('login failed', err)
    })
  }


}

