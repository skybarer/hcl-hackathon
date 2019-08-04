import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormData } from 'src/app/services/formdata';
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
    private router: Router,
    private formData: FormData
  ) { }

  ngOnInit() {
    const data = this.formData.getOption();
    this.loadDashboardData(data['proxyId']);
  }

  loadDashboardData(phone: any) {
    this.apiService.dashboard(phone).
    subscribe( (response) => {
      this.bankArray = response[0].accountList;
      this.walletArray = response[0].walletList;
      this.bankArray = this.mapImageToJsonBank(this.bankArray);
      this.walletArray = this.mapImageToJsonWallet(this.walletArray);
      this.formData.setOption('bankArray', this.bankArray);
      this.formData.setOption('walletArray', this.walletArray);
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

    // this.bankArray = this.mapImageToJsonBank(this.bankArray);
    // this.walletArray = this.mapImageToJsonWallet(this.walletArray);

      // this.formData.setOption('bankArray', this.bankArray);
      // this.formData.setOption('walletArray', this.walletArray);

      // console.log(this.formData.getOption());
  }


  fundTransfer() {
    this.router.navigateByUrl('/bank-transfer');
  }

  mapImageToJsonBank(data: any[]) {
     data.map((item) => {
      item['imageSrc'] = this.dashboardImage(item.mappedBeneBank);
      item['redirectUrl'] = this.dashboardUrl(item.mappedBeneBank);
      //  console.log('mapImageToJson', item);
    });
    return data;
  }
  mapImageToJsonWallet(data: any[]) {
     data.map((item) => {
      item['imageSrc'] = this.dashboardImage(item.custWalletTypeId);
       item['redirectUrl'] = this.dashboardUrl(item.custWalletTypeId);
      //  console.log('mapImageToJson', item);
    });
    return data;
  }

  dashboardImage(imageType: string) {

   let imaageUrl = '';
   let redirectUrl = '';

    switch (imageType) {
      case 'ICICI':
        imaageUrl = '/assets/images/icici_bank.jpg';
        redirectUrl = 'https://www.icicibank.com/';
        break;
      case 'DBS':
        imaageUrl = '/assets/images/dbs_bank.png';
        redirectUrl = 'https://www.dbs.com.sg/index/default.page';
        break;
      case 'OLA':
        imaageUrl = '/assets/images/ola_wallet.jpg';
        redirectUrl = 'https://www.olamoney.com/';
        break;
      case 'AIRTEL MONEY':
        imaageUrl = '/assets/images/airtel_money.jpg';
        break;
      case 'PHONE PAY':
        imaageUrl = '/assets/images/phonepey-wallet.png';
        break;
      case 'FREE RECHARGE':
        imaageUrl = '/assets/images/freerecharge-wallet.png';
        break;
      case 'NPCI':
        imaageUrl = '/assets/images/ola_wallet.jpg';
        break;
      // default:
      //   imaageUrl = '/assets/images/ola_wallet.jpg';
    }
   console.log('imageType' + imageType + imaageUrl );
   return  imaageUrl;
  }

  dashboardUrl(imageType: string) {

    let imaageUrl = '';
    let redirectUrl = '';

    switch (imageType) {
      case 'ICICI':
        imaageUrl = '/assets/images/icici_bank.jpg';
        redirectUrl = 'https://www.icicibank.com/';
        break;
      case 'DBS':
        imaageUrl = '/assets/images/dbs_bank.png';
        redirectUrl = 'https://www.dbs.com.sg/index/default.page';
        break;
      case 'OLA':
        imaageUrl = '/assets/images/ola_wallet.jpg';
        redirectUrl = 'https://www.olamoney.com/';
        break;
      case 'AIRTEL MONEY':
        imaageUrl = '/assets/images/airtel_money.jpg';
        redirectUrl = 'https://www.airtel.in/';
        break;
      case 'PHONE PAY':
        imaageUrl = '/assets/images/phonepey-wallet.png';
        redirectUrl = 'https://www.phonepe.com/en/';
        break;
      case 'FREE RECHARGE':
        imaageUrl = '/assets/images/freerecharge-wallet.png';
        redirectUrl = 'https://www.freecharge.in/';
        break;
      case 'NPCI':
        imaageUrl = '/assets/images/ola_wallet.jpg';
        redirectUrl = 'https://www.dbs.com.sg/index/default.page';
        break;
      // default:
      //   imaageUrl = '/assets/images/ola_wallet.jpg';
    }
    console.log('imageType' + imageType + imaageUrl );
    return  redirectUrl;
  }



}
