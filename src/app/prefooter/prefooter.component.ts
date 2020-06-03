import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
/**
 * Added material for the popup, tried bootstrap but I prefer to do my own responsive. and if I had more time I would have build a better design system
 */
// import $ from 'jquery';
@Component({
  selector: 'app-prefooter',
  templateUrl: './prefooter.component.html',
  styleUrls: ['./prefooter.component.scss'],
})
export class PrefooterComponent implements OnInit {
  service: any;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // $(window).on('load', function () {
    //   $('#myModal').modal('hide');
    // });
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = "itayppup";
    dialogConfig.autoFocus = true;
    const newLocal = this.dialog.open(PopupComponent, dialogConfig);
  }
}
