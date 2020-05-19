import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnoService {

  game: Game;
  gameObservable: Subject<Game> = new Subject<Game>();

  constructor(private httpClient: HttpClient) { 
    this.gameObservable.subscribe((value) => {
      this.game = value;
    });
  }

  createGame() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    this.httpClient.post('http://2122fc65.ngrok.io/create/game', null, { headers: headers }).subscribe(response => {
      console.log(response);
    });
  }

  getGame() {
    this.httpClient.get('http://2122fc65.ngrok.io/get/game').subscribe((data: Game) => {
      this.gameObservable.next(data);
    });
  }
}
