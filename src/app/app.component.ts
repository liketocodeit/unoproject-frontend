import { Component } from '@angular/core';

import {HomeComponent} from './homemodule/home.component';
import { UnoService } from './services/uno-service.service';
import { Game } from './models/game.model';

@Component({
  selector: 'uno-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  game: Game;

  public constructor() {
  }

  pageTitle: string = 'UNO';
}
