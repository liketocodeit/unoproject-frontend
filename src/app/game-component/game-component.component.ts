import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.scss']
})
export class GameComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {
      "number": "3",
      "color": "red",
      "type": "normal"
    },
    {
      "number": "6",
      "color": "yellow",
      "type": "normal"
    },{
      "number": "10",
      "color": "green",
      "type": "normal"
    },
    {
      "number": "Draw 2",
      "color": "blue",
      "type": "normal"
    }, {
      "number": "Draw 4",
      "color": "default",
      "type": "special"
    }
  ];

  putCard(card) {
    console.log("User put card : " + card.number + " of " + card.color)
  }

}
