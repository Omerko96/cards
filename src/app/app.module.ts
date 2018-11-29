import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CardsService } from './pages/cards/cards.service';

// Routes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
