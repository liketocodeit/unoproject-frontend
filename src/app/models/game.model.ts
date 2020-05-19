import { Player } from './player.model';
import { Card } from './card.model';

export class Game {
    gameId: String;
    players: Player[];
    playerCards: Map<Number, Card[]>;
    cardDeck: Card[];
    topCard: Card;
    currentPlayerIndex: Number;
    winnerList: Player[];
}