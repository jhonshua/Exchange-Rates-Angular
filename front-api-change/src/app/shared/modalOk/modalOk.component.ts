import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './modalOk.component.html',

})
export class ModalOkComponent {
  constructor(public dialogRef: MatDialogRef<ModalOkComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
