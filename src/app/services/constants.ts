import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constants {
   URI = 'http://10.0.2.107:8082/';
   DASHBOARD = 'balances?proxyId=';
   WALLET_TRANSFER = 'transactions/settlement';
}
