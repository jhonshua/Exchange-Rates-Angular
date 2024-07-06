import { Component} from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { UserService } from '../../services/register.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalErrorComponent } from '../../shared/modalError/modalError.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FooterComponent, HeaderComponent,FormsModule, CommonModule],
  templateUrl: './register.component.html',
})
export default class RegisterComponent  {

  errorMessage: string = '';

  full_name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  phone: number = 0;
  status:string = "active";
  rol_id:string = "admin";
  ability:object = {
    "read": true,
    "write": true,
    "edit": true,
    "delete":true
  }

  constructor(

    private userService: UserService,
    private router: Router,
    private dialog: MatDialog) {}


  Register(): void {

    this.userService.registerUser(
      this.full_name,
      this.username,
      this.email,
      this.password,
      this.phone,
      this.status,
      this.rol_id,
      this.ability
      )
      .subscribe({
      next: () =>{
        this.router.navigate(['/dasboard']);
      },
      error: (err)=>{
        console.error('login failed', err) ;
        this.errorMessage = err.message;
        this.openErrorModal();
      }
    });
  }

  openErrorModal(): void {
    this.dialog.open(ModalErrorComponent, {
      data: { errorMessage: this.errorMessage },
    });
  }

}
