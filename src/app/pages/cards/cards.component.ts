import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { CardsService } from './cards.service';
import { Card } from './card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('cardState', [
      state('in', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0.5)'
        }),
        animate(300)
      ])
    ])
  ]
})
export class CardsComponent implements OnInit {
  cards: Card[];
  cardToDelete;
  card: Card = {
    title: '',
    description: '',
    imagePath: ''
  }

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

  // Add New Card
  addCard(form) {
    if(form.valid) {
      this.cardsService.addCard(this.card);
      form.reset();
      document.getElementById('close').click();
    }
  }

  // Clear form for adding a new card
  clearForm(form) {
    form.reset();
  }

  // Delete Card
  deleteCard() {
    this.cardsService.deleteCard(this.cardToDelete);
  }

}
