import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BookThumbnailComponent } from './books/book-thumbnail.component';
import { StarsRating } from './books/stars-rating/stars.component';
import { BookList } from './books/book-list.component';
import { MainList } from './books/main-list.component';
import { Status404 } from './status-404.component';
import { NavBar } from './nav-bar.component';
import { ViewBook } from './view-book/view-book.component';
import { AddBook } from './addBook/add-book.component';
import { EditBook } from './view-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookThumbnailComponent,
    StarsRating,
    BookList,
    MainList,
    Status404,
    NavBar,
    ViewBook,
    AddBook,
    EditBook,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'books', component: MainList
      },
      {
        path: 'books/:id', component: ViewBook
      },
      {
        path: 'books/edit/:id', component: EditBook
      },
      {
        path: 'add', component: AddBook
      },
      {
        path: '', redirectTo: 'books', pathMatch: 'full'
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
