import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import { FormData } from 'src/app/services/formdata';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'alpha-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnChanges {
  loginForm: FormGroup;
  isLoading = false;
  isValid = false;
  constructor(
    private apiService: ApiService,
     private router: Router,
     private formData: FormData,
     private loaderService: LoaderService
     ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      proxyId: new FormControl('',  [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('',  [Validators.required])
    });
  }

  ngOnChanges() {
    this.isValid = false;
  }

  public  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  dummyValidation() {
    const username = this.loginForm.value.proxyId;
    const password = this.loginForm.value.password;
    if (username === 8099992277 && password === '1234') { return true; }
    return false;
  }

  onSubmit() {
    this.loaderService.showLoader();
     this.isValid = false;
    if (this.loginForm.valid && this.dummyValidation()) {
        this.apiService.login({proxyId: this.loginForm.value.proxyId});
        this.formData.setOption('proxyId', this.loginForm.value.proxyId);
        this.router.navigate(['/dashboard']);
        this.loaderService.hideLoader();
    } else {
      this.isValid = true;
      this.loaderService.hideLoader();
    }
  }
}
