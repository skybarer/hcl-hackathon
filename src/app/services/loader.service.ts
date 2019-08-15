import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService  {

    loaderStatus = false;

    showLoader() {
        this.loaderStatus = true;
    }

    hideLoader() {
        this.loaderStatus = false;
    }

}
