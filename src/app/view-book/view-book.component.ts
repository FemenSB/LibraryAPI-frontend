import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Book } from "../books/book";
import { BookService } from "../books/book.service";

@Component({
    templateUrl: './view-book.component.html',
    styleUrls: ['./view-book.component.css'],
})

export class ViewBook implements OnInit{

    book : Book;

    constructor(private activatedRoute : ActivatedRoute,
                private bookService : BookService) { }

    
    getBook() : void {
        this.bookService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: book => {
                this.book = book;
            },
            error: err => {
                console.log(err);
            }
        });
    }

    ngOnInit(): void {
        this.getBook();
    }
}