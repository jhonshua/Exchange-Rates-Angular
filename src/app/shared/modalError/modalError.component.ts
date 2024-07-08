import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './modalError.component.html',

})
export class ModalErrorComponent {

  errorMessage: string = '';

   constructor(
    public dialogRef: MatDialogRef<ModalErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { errorMessage: string } // Recibe el mensaje de error
  ) {
    this.errorMessage = data.errorMessage; // Asigna el mensaje de error
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
