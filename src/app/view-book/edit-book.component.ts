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

    ngOnInit(): void {
        this.book = this.bookService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }
}