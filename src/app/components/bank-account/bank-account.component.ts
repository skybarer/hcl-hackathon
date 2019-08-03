import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alpha-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {

  constructor() { }

  @Input() bankData: any;


  ngOnInit() {
  }

}
