import { Component, ViewChild, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { Router } from '@angular/router';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'alpha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(ProgressBarComponent) progressBar: ProgressBarComponent;
  @ViewChild(StepperComponent) stepper: StepperComponent;

  //  loaderStatus = true;
   constructor(
     private router: Router,
     private loaderService: LoaderService
   ) {}

   ngOnInit(): void {
    //  this.loaderService.showLoader();
    //  this.loaderStatus = false;
     // load to first page on refresh.
      this.router.navigate(['/']);
      // this.loaderStatus = true;
      // this.loaderService.hideLoader();
   }

  decrement = () => {
    this.progressBar.decrement();
    this.stepper.previousLink();
  }


  increment = () => {
    this.progressBar.increment();
    this.stepper.nextLink();
  }


  // showLoader = () => {
  //   this.loaderStatus = false;
  // }

  // hideLoader = () => {
  //   this.loaderStatus = true;
  // }

}

