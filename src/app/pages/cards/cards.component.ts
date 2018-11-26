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
  cardToDelete;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCards()
      .subscribe(
        (cards => {
          this.cards = cards;
        })
      )
  }

  // Modal to Confirm Delete of a Card
  modalToDeleteCard(event, card) {
    let openModalBtn = document.getElementById('delete-modal');
    openModalBtn.click();
    this.cardToDelete = card;
  }

  // Delete Card
  deleteCard() {
    this.cardsService.deleteCard(this.cardToDelete);
  }

}
