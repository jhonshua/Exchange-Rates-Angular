import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalErrorComponent} from '../../shared/modalError/modalError.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) {}

  login(): void {

    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!this.email || !this.password) {
      this.errorMessage = "Verify, data required,";
      this.openErrorModal();
      return;

    }else if (this.password.length < 6 || this.password.length > 6){
      this.errorMessage = "Verify your password 6 characters";
      this.openErrorModal();
      return;

    } else if (!emailRegex.test(this.email)) {
      this.errorMessage = "Verify your email, incorrect format";
      this.openErrorModal();

    }else{
       this.authService.login(this.email, this.password).subscribe({
      next: () =>{
        this.authService.setLoginSuccess(true);
        this.router.navigate(['/dasboard']);
      } ,
      error: (err) =>{
       console.error('login failed', err) ;
       this.errorMessage = err.message;
       this.openErrorModal();
      }
    })
    }
  }

  openErrorModal(): void {
    this.dialog.open(ModalErrorComponent, {
      data: { errorMessage: this.errorMessage },
    });
  }
}

