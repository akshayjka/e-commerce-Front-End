import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor{

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() errorMessage: string = '';
  @Input() isDateField : boolean = false;
  @Input() isRequired : boolean = false;
  @Input() control! :FormControl;
  @Input() isValid: boolean = true;
  @Input() isTouched : boolean = false;

  value: string = '';

  @ViewChild('datepicker') datepicker!: MatDatepicker<any>; 

  // ControlValueAccessor methods
  onChange = (value: string) => {};
  onTouched = () => {
  };

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
  }
  constructor() { 
  }
  ngOnInit(): void {
  }

  getErrorMessage() {
    console.log("entertajdnkamsdnsbdk")
   
  }

}
