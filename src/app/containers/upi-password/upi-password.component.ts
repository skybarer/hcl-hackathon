import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'alpha-upi-password',
  templateUrl: './upi-password.component.html',
  styleUrls: ['./upi-password.component.scss']
})
export class UpiPasswordComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {}
    });
  }

}
