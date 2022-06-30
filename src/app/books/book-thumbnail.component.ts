import { Component, OnInit } from "@angular/core";
import { Book } from './book';

@Component({
    selector: 'app-book-thumb',
    templateUrl: './book-thumbnail.component.html',
    styleUrls: ['book-thumbnail.component.css'],
})

export class BookThumbnailComponent implements OnInit {

    book: Book = {
        id: 1,
        author: 'Lovecraft',
        rating: 3.25,
        releaseDate: '01/01/0001',
        title: 'At the Mountains of Madness',
    };

    ngOnInit(): void {

    }

}