import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiKeyService } from '../../services/apiKey.service'
import { MatDialog } from '@angular/material/dialog';
import { ModalOkComponent } from '../../shared/modalOk/modalOk.component';
import { environment } from '../../../environments/environment.development'


@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css'
})

export default class DasboardComponent {

  showModal = false;
  baseUrl: any = environment.apiUrl;
  apiKeys: string = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  currentDate: Date = new Date();

  constructor(
    private authService: AuthService,
    private apiKeyService: ApiKeyService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Verificar si el inicio de sesión fue exitoso antes de abrir el modal
    if (this.authService.isLoginSuccessful()) {
      this.openSuccessModal();
    }
  }


// methods
  logout(): void {
    this.authService.logout();
  }

  getApiKey(): void {
    this.apiKeyService.getApiKeycall().subscribe(
      (apiKeyResponse: any) => {
        console.log('Respuesta de la API:', apiKeyResponse.apiKey);
        this.apiKeys = apiKeyResponse.apiKey;
      }
    );
  }

  getCurrentMonth(): string {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const currentMonthIndex = this.currentDate.getMonth(); // Get current month index (0-11)
    return months[currentMonthIndex]; // Return the month name from the array
  }


  openSuccessModal(): void {
    // Abre el modal de éxito
    this.dialog.open(ModalOkComponent);
  }

}
