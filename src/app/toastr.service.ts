import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  constructor(private snackBar: MatSnackBar) { }

  showToast(message: string, duration: number = 2000) {
    const config = new MatSnackBarConfig();
    config.duration = duration;
    config.horizontalPosition = 'end';
    config.verticalPosition = 'top';
    config.panelClass = ['custom-snackbar']; // Apply custom CSS class

    this.snackBar.open(message, 'Close', config);
  }
}
