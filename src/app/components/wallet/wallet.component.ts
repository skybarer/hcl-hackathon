import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alpha-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor() { }

  @Input() walletData: any;

  ngOnInit() {
  }

}
