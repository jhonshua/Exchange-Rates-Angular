import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export default class DocumentationComponent {

}
