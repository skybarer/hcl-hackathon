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
     'image': 'assets/images/ola_wallet.jpg',
     'amout': 1000,
     'name': 'Ola Money'
    },
     {
     'id': 1,
     'image': 'assets/images/paytm-wallet.png',
     'amout': 2000,
     'name': 'Paytm'
    }
  ];

  bankArray = [
    {
     'id': 1,
     'image': 'assets/images/icici_bank.jpg ',
     'amout': 10000,
     'name': 'ICICI'
    },
     {
     'id': 1,
     'image': 'assets/images/dbs_bank.png',
     'amout': 20000,
     'name': 'DBS'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
