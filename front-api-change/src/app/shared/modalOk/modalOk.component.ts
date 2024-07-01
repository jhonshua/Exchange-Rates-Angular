import { Component, HostListener } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modalOk',
  standalone: true,
  imports: [],
  templateUrl: './modalOk.component.html',
})


export class ModalOkComponent {

  @Output() closeModal = new EventEmitter<void>(); // Evento para notificar al padre

  @HostListener('click', ['$event'])
  handleClick(event: any) {
    // Verifique si el objetivo del clic es el elemento del botón "X"
    if (event.target.classList.contains('w-max')) {
      this.closeModal.emit(); // Emitir evento de cierre
    }
  }
}

