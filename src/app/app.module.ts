import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BookThumbnailComponent } from './books/book-thumbnail.component';
import { StarsRating } from './books/stars-rating/stars.component';
import { BookList } from './books/book-list.component';
import { MainList } from './books/main-list.component';
import { Status404 } from './status-404.component';
import { NavBar } from './nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookThumbnailComponent,
    StarsRating,
    BookList,
    MainList,
    Status404,
    NavBar,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'books', pathMatch: 'full'
      },
      {
        path: 'books', component: MainList
      },
      {
        path: '**', component: Status404
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
