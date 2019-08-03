import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'alpha-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  walletArray = [];
  bankArray = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadDashboardData('8099992277');
  }

  loadDashboardData(phone: any) {
    this.apiService.dashboard(phone).
    subscribe( (response) => {
      this.bankArray = response[0].accountList;
      this.walletArray = response[1].walletList;
    }
    );

    // this.bankArray = [
    //   {
    //     'proxyMapperId': 3,
    //     'proxyId': '8099992277',
    //     'mappedAcct': '23034056912',
    //     'mappedBeneBank': 'HDFC',
    //     'acctBalance': '2000',
    //     'createdBy': 'NPCI',
    //     'createdTm': '2019-08-03T09:22:52.000+0000',
    //     'updatedBy': 'NPCI',
    //     'updatedTm': '2019-08-03T09:22:52.000+0000'
    //   },
    //   {
    //     'proxyMapperId': 4,
    //     'proxyId': '8099992277',
    //     'mappedAcct': '76034023454',
    //     'mappedBeneBank': 'HSBC',
    //     'acctBalance': '6000',
    //     'createdBy': 'NPCI',
    //     'createdTm': '2019-08-03T09:22:52.000+0000',
    //     'updatedBy': 'NPCI',
    //     'updatedTm': '2019-08-03T09:22:52.000+0000'
    //   }
    // ];

    //  this.walletArray = [
    //   {
    //     'customerMappingId': 1,
    //     'custMobileNo': '8099992277',
    //     'custWalletTypeId': 'OLA',
    //     'custWalletAcctNum': '2131321234',
    //     'custWalletBalance': 1000,
    //     'createdBy': 'HCL',
    //     'createdTm': '2019-08-03 16:51:59',
    //     'updatedBy': 'HCL',
    //     'updatedTm': '2019-08-03 16:51:59'
    //   },
    //   {
    //     'customerMappingId': 2,
    //     'custMobileNo': '8099992277',
    //     'custWalletTypeId': 'AIRTEL MONEY',
    //     'custWalletAcctNum': '4567892341',
    //     'custWalletBalance': 500,
    //     'createdBy': 'HCL',
    //     'createdTm': '2019-08-03 16:51:59',
    //     'updatedBy': 'HCL',
    //     'updatedTm': '2019-08-03 16:51:59'
    //   },
    //   {
    //     'customerMappingId': 3,
    //     'custMobileNo': '8099992277',
    //     'custWalletTypeId': 'PHONE PAY',
    //     'custWalletAcctNum': '3145678922',
    //     'custWalletBalance': 1500,
    //     'createdBy': 'HCL',
    //     'createdTm': '2019-08-03 16:51:59',
    //     'updatedBy': 'HCL',
    //     'updatedTm': '2019-08-03 16:51:59'
    //   },
    //   {
    //     'customerMappingId': 4,
    //     'custMobileNo': '8099992277',
    //     'custWalletTypeId': 'FREE RECHARGE',
    //     'custWalletAcctNum': '5678912345',
    //     'custWalletBalance': 2000,
    //     'createdBy': 'HCL',
    //     'createdTm': '2019-08-03 16:51:59',
    //     'updatedBy': 'HCL',
    //     'updatedTm': '2019-08-03 16:51:59'
    //   }
    // ];
  }

  fundTransfer() {
    this.router.navigateByUrl('/bank-transfer');
  }



}
