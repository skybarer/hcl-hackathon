import { Component, ViewChild, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { Router } from '@angular/router';

@Component({
  selector: 'alpha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(ProgressBarComponent) progressBar: ProgressBarComponent;
  @ViewChild(StepperComponent) stepper: StepperComponent;

   constructor(
     private router: Router
   ) {}

   ngOnInit(): void {
     // load to first page on refresh.
      this.router.navigate(['/']);
   }

  decrement = () => {
    this.progressBar.decrement();
    this.stepper.previousLink();
  }


  increment = () => {
    this.progressBar.increment();
    this.stepper.nextLink();
  }

}

