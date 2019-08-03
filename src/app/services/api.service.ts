import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private constants: Constants
  ) { }



  login(data: any): Observable<any> {
    console.log(this.constants.URI + this.constants.LOGIN)
    return this.http.post<any>(this.constants.URI + this.constants.LOGIN, data);
  }


  dashboard(data: any): Observable<any> {
    return this.http.get<any>(this.constants.URI + this.constants.DASHBOARD + data );
  }

}
