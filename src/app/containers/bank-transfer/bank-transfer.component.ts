import { Component, OnInit } from '@angular/core';
import { FormData } from 'src/app/services/formdata';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'alpha-bank-transfer',
  templateUrl: './bank-transfer.component.html',
  styleUrls: ['./bank-transfer.component.scss']
})
export class BankTransferComponent implements OnInit {

  data: any;
  walletList: any = [];
  walletForm: FormGroup;
  constructor(
      private formData: FormData,
      private router: Router
  ) { }


  ngOnInit() {
    this.data = this.formData.getOption();
    this.data.walletArray.map((item: any) => {
      this.walletList.push(
        {
          value: item.customerMappingId ,
          viewValue: item.custWalletTypeId
        }
      )
    });
     this.walletForm = new FormGroup({
      proxyId: new FormControl(this.data['proxyId'], { }),
      fromWalletId: new FormControl('', { }),
      toWalletId: new FormControl('', { }),
      amount: new FormControl('', { }),

    });


  }

  onSubmit() {
    console.log('this.walletForm', this.walletForm.value);
       this.router.navigate(['/upi-password']);
  }

}
