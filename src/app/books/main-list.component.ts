import { Component, OnInit } from "@angular/core";
import { Book } from "./book";
import { BookService } from "./book.service";

@Component({
    selector: 'app-main-list',
    templateUrl: './main-list.component.html',
    styleUrls: ['./main-list.component.css'],
})

export class MainList implements OnInit{

    _allBooks : Book[] = [];
    filteredBooks : Book[] = [];

    _filter : string;

    constructor(private bookService : BookService) { }

    ngOnInit(): void {
        this._allBooks = this.bookService.retrieveAll();
        this.filteredBooks = this._allBooks;
    }

    set filter(value : string) {
        this._filter = value;

        this.filteredBooks = this._allBooks.filter((book : Book) => book.title.toLowerCase().indexOf(this._filter.toLowerCase()) != -1);

    }

    get filter() {
        return this._filter;
    }

}