import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'alpha-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToAvailOffers(){
    //this.router.navigate(['/alpha-ola-offers']);
  }

}
