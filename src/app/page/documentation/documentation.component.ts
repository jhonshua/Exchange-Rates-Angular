import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import {
  jsonBodyUsDolar,
  jsonUsDolarResponse,
  jsonBodyEuro,
  jsonEuroResponse,
  jsonBodyRublo,
  jsonRubloResponse,
  jsonBodytPrecioNational,
  jsontPrecioNationalResponse
} from './data';



@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule,FooterComponent, HeaderComponent],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css',
})
export default class DocumentationComponent {


  public jsonBodyUsDolar = jsonBodyUsDolar
  public jsonUsDolarResponse = jsonUsDolarResponse
  public jsonBodyEurodolar = jsonBodyEuro
  public jsonEuroResponse = jsonEuroResponse
  public jsonBodyRublo = jsonBodyRublo
  public jsonRubloResponse = jsonRubloResponse
  public jsonBodytPrecioNational = jsonBodytPrecioNational
  public jsontPrecioNationalResponse = jsontPrecioNationalResponse

  expand(event: { style: { display: string; }; }){
    if (event.style.display === "block") {
      event.style.display = "none";
  } else {
        event.style.display = "block";
   }
}

}
