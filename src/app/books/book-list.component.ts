import { Component, Input } from "@angular/core";
import { Book } from './book';
import { BookService } from "./book.service";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})

export class BookList {
    @Input()
    listWidth : number;
    @Input()
    listHeight : number;
    @Input()
    books : Book[];
}