import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component'
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-landin-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent ],
  templateUrl: './landin-page.component.html',
  styleUrl: './landin-page.component.css'
})
export default class LandinPageComponent {

}
