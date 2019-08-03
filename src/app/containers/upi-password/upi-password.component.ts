import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'alpha-upi-password',
  templateUrl: './upi-password.component.html',
  styleUrls: ['./upi-password.component.scss']
})
export class UpiPasswordComponent implements OnInit {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() { }

  onSubmit() {
    const snackBarRef =  this.snackBar.open('Do you want to avail Offers', 'YES', {
      duration: 2000,
    });

    snackBarRef.afterDismissed().subscribe(() => {
      this.router.navigate(['/dashboard']);
      // console.log('The snack-bar was dismissed');
    });


    snackBarRef.onAction().subscribe(() => {
      alert('you will be redirected to offers');
      console.log('The snack-bar action was triggered!');
    });

    snackBarRef.dismiss();
  }

}
