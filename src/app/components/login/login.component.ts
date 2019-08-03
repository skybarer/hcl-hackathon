import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'alpha-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      proxyId: new FormControl('', {
      })
    });
  }

  onSubmit() {
    this.apiService.login({
      proxyId: this.loginForm.value.proxyId
    });
  }
}
