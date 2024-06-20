import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FooterComponent, HeaderComponent ],
  templateUrl: './faq.component.html'
})
export default class FaqComponent {

}
