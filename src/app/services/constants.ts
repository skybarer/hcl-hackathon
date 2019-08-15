import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constants {
   URI = 'http://192.168.253.1:8082/';
   DASHBOARD = 'balances?proxyId=';
   WALLET_TRANSFER = 'transactions/settlement';
}
