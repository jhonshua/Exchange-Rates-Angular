import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { environment } from '../../../environments/environment.development'


@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './pricing.component.html',
})
export default class PricingComponent {

  baseUrl: any = environment.apiUrl;


}
