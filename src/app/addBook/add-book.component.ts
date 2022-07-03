import { Component } from "@angular/core";
import { Book } from "../books/book";
import { BookService } from "../books/book.service";

@Component({
    templateUrl: './add-book.component.html',
    styleUrls: ['add-book.component.css'],
})

export class AddBook {
    
    constructor(private bookService : BookService) { }

    book : Book = new Book();

    postBook() {
        this.bookService.saveBook(this.book).subscribe({
            next: book => {
                console.log(book);
            },
            error: err => {
                console.log(err);
            }
        });
    }

}