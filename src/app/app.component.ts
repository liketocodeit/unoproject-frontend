import { Component } from '@angular/core';

import {HomeComponent} from './homemodule/home.component';

@Component({
  selector: 'uno-root',
  template:`
  <h1 style="text-align:center">{{pageTitle}}</h1>
  <div style="text-align:center">
  <uno-home></uno-home>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'UNO';
}
