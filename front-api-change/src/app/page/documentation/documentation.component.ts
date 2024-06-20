import { Component} from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule,FooterComponent, HeaderComponent],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export default class DocumentationComponent {

  public jsonData = {  // Define the JSON data here
    "email": "julio.llinas@gmail.com",
    "password": "123456"
  };

  public jsonInvalidEmail = {
    "message": "Invalid email or password"
  }

  public jsonOk= {
    "accessToken": "eyJhbGciOiJ...",
    "authentication": {
      "strategy": "local"
    },
    "user": {
      "_id": "666301a435ef4793d...",
      "username": "julio12345",
      "email": "julio.llinas@gmail.com",
      "full_name": "julio llinas",
      "rol_id": "65186df457796b5ea2c6e...",
      "ability": [
        {
          "action": "read",
          "subject": "ACL"
        },
        {
          "action": "read",
          "subject": "Auth"
        }
      ]
    }
  }
  constructor() {}

}
