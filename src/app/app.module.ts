import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookThumbnailComponent } from './books/book-thumbnail.component';
import { StarsRating } from './books/stars-rating/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    BookThumbnailComponent,
    StarsRating,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
