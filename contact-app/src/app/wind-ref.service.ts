import { Injectable } from '@angular/core';

@Injectable()
export class WindRef {

  constructor() { }

  getNativeWindow(){

    return window;

  }
}
