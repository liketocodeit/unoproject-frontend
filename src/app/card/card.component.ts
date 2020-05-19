import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() number: String;
  @Input() color: String;
  @Input() type: String;

  name = "hello world"

  constructor() { }

  ngOnInit(): void {
  }

  getCardColor() {
    if (this.type === 'special') {
      return {'background-color': 'black', 'color': 'white'};
    } else {
      return {'background-color': this.color };
    }
  }

}
