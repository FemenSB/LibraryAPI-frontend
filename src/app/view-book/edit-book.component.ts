import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Book } from "../books/book";
import { BookService } from "../books/book.service";

@Component({
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.css'],
})

export class EditBook implements OnInit{
    
    constructor(private activatedRoute : ActivatedRoute,
                private bookService : BookService) { }
    
    book : Book;

    save() : void {
        this.bookService.saveBook(this.book).subscribe({
            next: book => {
                console.log('Changes saved.\n' + book);
            },
            error: err => {
                console.log(err);
            }
        });
    }

    delete() : void {
        this.bookService.deleteBook(this.book).subscribe({
            next: message => {
                console.log(message);
            },
            error: err => {
                console.log(err);
            }
        });
    }

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