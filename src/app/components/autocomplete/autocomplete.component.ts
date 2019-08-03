import { Component, OnInit, forwardRef, AfterViewInit, OnChanges, Input, ViewChild, Injector, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, NgControl, AbstractControl } from '@angular/forms';
import { MatAutocompleteTrigger, MatInput } from '@angular/material';

@Component({
  selector: 'alpha-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() => AutocompleteComponent),
     multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent  implements AfterViewInit, OnChanges, ControlValueAccessor, Validator {
  @Input() options: any[] = [];
  @Input() readonly = false;
  @Input() displayFunction: (value: any) => string = this.defaultDisplayFn;
  @Input() filterFunction: (value: any) => any[] = this.defaultFilterFn;

  @ViewChild(MatAutocompleteTrigger) trigger: MatAutocompleteTrigger;
  @ViewChild(MatInput) matInput: MatInput;

  filteredOptions: any[];
  optionSelected = '';
  onChange = (val: any) => {};
  onTouched = () => {};

  constructor(
    private injector: Injector
  ) { }

  ngAfterViewInit() {
    this.trigger.panelClosingActions
      .subscribe(
        e => {
          if (this.trigger.activeOption) {
            const value = this.trigger.activeOption.value;
            this.writeValue(value);
            this.onChange(value);
          }
        }
      );

    // this is needed in order for the mat-form-field to be marked as invalid when the control is invalid
    setTimeout(() => {
      this.matInput.ngControl = this.injector.get(NgControl, null);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.options) {
      this.filterOptions(this.optionSelected);
    }
  }

  writeValue(obj: any): void {
    if (obj) {
      this.trigger.writeValue(obj);
      this.optionSelected = obj;
      this.filterOptions(obj);
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.matInput.disabled = isDisabled;
    this.trigger.setDisabledState(isDisabled);
  }

  // validate(c: AbstractControl): { [key: string]: any; } {
  //   return forbiddenAutocompleteValue()(c);
  // }

  validate(c: AbstractControl): { [key: string]: any; } {
    return null;
  }

  valueChanged(event) {
    const value = event.target.value;
    this.optionSelected = value;
    this.onChange(value);
    this.filterOptions(value);
  }

  onOptionSelected(event) {
    const value = event.option.value;
    this.optionSelected = value;
    this.onChange(value);
    this.filterOptions(value);
  }

  filterOptions(value) {
    this.filteredOptions = this.filterFunction(value);
  }

  private defaultFilterFn(value) {
    let name = value;

    if (value && typeof value === 'object') {
      name = value.name;
    }

    return this.options.filter(
      o => o.name.toLowerCase().indexOf(name ? name.toLowerCase() : '') !== -1
    );
  }

  defaultDisplayFn(value) {
    return value ? value.name : value;
  }
}