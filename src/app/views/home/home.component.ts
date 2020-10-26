import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LiveFormDialogComponent } from './live-form-dialog/live-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public handleOpenDialog(): void {
    const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      minWidth: '400px',
    });

    //Desnecessário
    dialogRef.afterClosed().subscribe(data => {
      console.log(`The dialog was closed ${data}`);
    });
  }
}
