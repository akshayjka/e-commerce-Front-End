import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  @Input() message:any;

  @Input() horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  @Input() verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor() { }



  ngOnInit(): void {
  }

}
