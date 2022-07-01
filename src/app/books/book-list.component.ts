import { CompileSummaryKind } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";
import { Book } from './book';
import { BookService } from "./book.service";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})

export class BookList implements OnInit{
    @Input()
    columns : number;
    @Input()
    rows : number;
    @Input()
    books : Book[];

    listWidth : number;
    listHeight : number;

    ngOnInit() {
        this.listWidth = (this.columns * 220) + 10;
        this.listHeight = (this.rows * 276) + 10;
    }

}