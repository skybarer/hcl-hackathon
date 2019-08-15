import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import { FormData } from 'src/app/services/formdata';

@Component({
  selector: 'alpha-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  constructor(
    private apiService: ApiService,
     private router: Router,
     private formData: FormData
     ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      proxyId: new FormControl('',  [Validators.required]),
      password: new FormControl('',  [Validators.required])
    });
  }

  public  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.loginForm.valid) {
        this.apiService.login({proxyId: this.loginForm.value.proxyId});
        this.formData.setOption('proxyId', this.loginForm.value.proxyId);
        this.router.navigate(['/dashboard']);
    }
  }
}
