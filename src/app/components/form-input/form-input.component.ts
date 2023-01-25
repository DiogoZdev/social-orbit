import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: FormInputComponent
    }
  ]
})
export class FormInputComponent implements ControlValueAccessor {

  @Input() inputType!: string;
  @Input() inputLabel!: string;
  
  touched = false;
  disabled = false;

  public inputValue: string | number | null = null;

  constructor() { }

  onChange = (val: string | number | null) => {}

  onTouched = () => {}

  writeValue(val: string | number) {
    if (!this.disabled) this.inputValue = val;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }


}
