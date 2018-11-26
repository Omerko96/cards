import { Component, OnInit } from '@angular/core';

import { CardsService } from './cards.service';
import { Card } from './card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCards()
      .subscribe(
        (cards => {
          this.cards = cards;
        })
      )
  }

}
