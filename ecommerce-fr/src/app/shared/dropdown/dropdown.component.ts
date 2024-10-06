import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() label: string = ''; // Label for the dropdown
  @Input() options: { value: string, label: string }[] = []; // List of options
  @Input() control!: FormControl; // Form control
  showHint: boolean = true;
  constructor() { }

  ngOnInit(): void {
     // Listen to value changes to determine when a value is selected
     this.control.valueChanges.subscribe(value => {
      // Hide the hint when a value is selected
      this.showHint = !value;
    });
  }

}
