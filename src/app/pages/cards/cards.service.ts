import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cardsCollection: AngularFirestoreCollection<Card>;
  cards: Observable<Card[]>;
  cardDoc: AngularFirestoreDocument<Card>;

  constructor(private afs: AngularFirestore) { }

  // Get Cards
  getCards() {
    this.cardsCollection = this.afs.collection('cards', ref => ref.orderBy('title', 'asc'));
    return this.cards = this.cardsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Card;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    )
  }

  // Delete Card
  deleteCard(card: Card) {
    this.cardDoc = this.afs.doc(`cards/${card.id}`);
    this.cardDoc.delete();
  }
}
