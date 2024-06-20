import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component'
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-landin-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent ],
  templateUrl: './landin-page.component.html',
  styleUrls: ['./landin-page.component.css']
})
export default class LandinPageComponent {

  constructor(private router: Router) {} // Inject Router in constructor

  // ... other component logic

  onButtonClick() {
    this.router.navigate(['/pricing']); // Navigate to "/pricing" route
  }
}
