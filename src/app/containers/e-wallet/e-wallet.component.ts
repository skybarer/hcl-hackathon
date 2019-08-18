import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'alpha-e-wallet',
  templateUrl: './e-wallet.component.html',
  styleUrls: ['./e-wallet.component.scss']
})
export class EWalletComponent implements OnInit {


 public  walletForm: FormGroup;

   offeres = [
    {value: 'shopping', viewValue: 'Shopping'},
    {value: 'movies', viewValue: 'Movies'}
  ];

  offeresList = [
    {
      'link': 'https://www.amazon.com/',
      'imgSrc': './assets/images/amazon.png',
      'type': 'shopping'
    },
    {
      'link': 'https://www.flipkart.com/',
      'imgSrc': './assets/images/flipkart.jpg',
      'type': 'shopping'
    },
    {
      'link': 'https://in.bookmyshow.com/',
      'imgSrc': './assets/images/bookMy.jpg',
      'type': 'movies'
    },
    {
      'link': 'https://www.amazon.com/',
      'imgSrc': './assets/images/amazon.jpg',
      'type': 'movies'
    }
  ];

  constructor() { }

  ngOnInit() {
      this.walletForm = new FormGroup({
        selectValue: new FormControl('')
      });
  }

}
