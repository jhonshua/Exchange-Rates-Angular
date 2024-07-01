import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiKeyService } from '../../services/apiKey.service'
import { ModalOkComponent } from '../../shared/modalOk/modalOk.component';



@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [ModalOkComponent],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css'
})

export default class DasboardComponent {

  showModal = false;
  apiKeys: string = "ho0la es una prueba";
  constructor(
    private authService: AuthService,
    private apiKeyService: ApiKeyService
  ) {}

  ngOnInit() {
    this.getApiKey();
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

}
