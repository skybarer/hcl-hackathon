import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alpha-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {


  @Input() mode: string;
  @Input() color: string;
  @Input() steps: number;
  @Input() stepSize: number;

  // @Output() _increment = new EventEmitter();
  // @Output() _decrment = new EventEmitter();

  stepIncrementValue: number;
  value: number;


  constructor() {}

  ngOnInit() {
    this.stepIncrementValue = 100 / this.steps;
    this.value = this.stepIncrementValue;
  }

  increment = () => {
    if (this.stepSize > this.steps - 1) { return; }
    this.stepSize++;
    this.value += this.stepIncrementValue;
    // this._increment.emit(this.stepSize);
  }
  decrement = () => {
    if (this.stepSize - 1 < 1) { return; }
    this.stepSize--;
    this.value -= this.stepIncrementValue;
    // this._increment.emit(this.stepSize);
  }

}
