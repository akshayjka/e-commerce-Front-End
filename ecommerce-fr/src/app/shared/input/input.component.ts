import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() type:string='';
  @Input() isValid:boolean = true;
  @Input() isTouched:boolean = false;
  @Input() label: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
