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

    getBooks() : void {
        this.bookService.retrieveAll().subscribe({
            next: books => {
                this._allBooks = books;
                this.filteredBooks = this._allBooks;
            },
            error: err => {
                console.log(err);
            }
        });
    }

    ngOnInit(): void {
        this.getBooks();
    }

    set filter(value : string) {
        this._filter = value;

        this.filteredBooks = this._allBooks.filter((book : Book) => book.title.toLowerCase().indexOf(this._filter.toLowerCase()) != -1);

    }

    get filter() {
        return this._filter;
    }

}