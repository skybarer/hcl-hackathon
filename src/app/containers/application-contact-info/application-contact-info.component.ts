import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'alpha-application-contact-info',
  templateUrl: './application-contact-info.component.html',
  styleUrls: ['./application-contact-info.component.scss']
})
export class ApplicationContactInfoComponent implements OnInit {

  validateForm: FormGroup;

  inputData = [
    {
      'label': 'red',
      'checked': true,
      'disabled': false
    },
    {
      'label': 'green',
      'checked': false,
      'disabled': false
    },
    {
      'label': 'yellow',
      'checked': true,
      'disabled': true
    }
  ];

  inputData1 = [
    {
      'label': 'red',
      'checked': true,
      'disabled': false
    },
    {
      'label': 'green',
      'checked': false,
      'disabled': false
    },
    {
      'label': 'yellow',
      'checked': true,
      'disabled': true
    }
  ];

  options = [
    {'name': 'one'},
    {'name': 'two'},
    {'name': 'three'}
  ];

  constructor() { }

  ngOnInit() {
    this.validateForm = new FormGroup({
      // items: new FormControl('', Validators.required),
      // items1: new FormControl('', Validators.required)
        branch: new FormControl({'name': 'one'}, Validators.required),
        branch1: new FormControl({'name': 'three'}, Validators.required)
    });
  }

  submit() {
    if(this.validateForm.valid) {
      console.log(this.validateForm.value);
    }
  }

}
