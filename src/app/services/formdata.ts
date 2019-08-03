import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormData {

  private data = {};
  setOption(option: any, value: any) {
    this.data[option] = value;
  }

  getOption() {
    return this.data;
  }

  constructor() { }
}
