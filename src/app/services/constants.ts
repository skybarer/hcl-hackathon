import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constants {
   IPADDRESS = 'http://192.168.1.100';
   PORT = '8082';
   URI = 'http://192.168.1.100:8082/';
   /*LOGIN = 'balances';*/
   DASHBOARD = 'balances?proxyId=';
}
