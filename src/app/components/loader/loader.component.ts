import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'alpha-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;


  constructor(
    private loader: LoaderService
  ) {
   }

  ngOnInit() {
  }

}
