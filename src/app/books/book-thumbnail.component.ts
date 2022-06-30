import { Component, Input, OnInit } from "@angular/core";
import { Book } from './book';

@Component({
    selector: 'app-book-thumb',
    templateUrl: './book-thumbnail.component.html',
    styleUrls: ['book-thumbnail.component.css'],
})

export class BookThumbnailComponent implements OnInit {

    @Input()
    book : Book;

    ngOnInit(): void {

    }

}