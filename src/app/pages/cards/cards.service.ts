import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cardsCollection: AngularFirestoreCollection<Card>;
  cards: Observable<Card[]>;

  constructor(private afs: AngularFirestore) { }

  getCards() {
    this.cardsCollection = this.afs.collection('cards');
    return this.cards = this.cardsCollection.valueChanges(); 
  }
}
