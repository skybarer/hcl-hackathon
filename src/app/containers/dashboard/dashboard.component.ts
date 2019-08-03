import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alpha-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  walletArray = [
    {
     'id': 1,
     'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
     'amout': 1000,
     'name': 'paytm'
    },
     {
     'id': 1,
     'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
     'amout': 2000,
     'name': 'paytm'
    }
  ];

  bankArray = [
    {
     'id': 1,
     'image': 'assets/images/ola-money.png',
     'amout': 1000,
     'name': 'Ola Money'
    },
     {
     'id': 1,
     'image': 'assets/images/paytm-wallet.png',
     'amout': 2000,
     'name': 'Paytm Wallet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
