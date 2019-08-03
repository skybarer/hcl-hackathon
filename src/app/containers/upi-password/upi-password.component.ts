import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alpha-upi-password',
  templateUrl: './upi-password.component.html',
  styleUrls: ['./upi-password.component.scss']
})
export class UpiPasswordComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
     this.router.navigate(['/dashboard']);
  }

}
