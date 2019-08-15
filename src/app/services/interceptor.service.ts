import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements  HttpInterceptor  {

  constructor(
     private loaderService: LoaderService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }
    this.loaderService.showLoader();
    return next.handle(req)
    .pipe(
      finalize(() => this.loaderService.hideLoader())
      );

  }

}
