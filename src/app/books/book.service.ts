import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Book } from "./book";

@Injectable({
    providedIn: 'root'
})

export class BookService {

    constructor(private httpClient : HttpClient) { }

    private apiUrl = 'http://localhost:3000/api/books';

    private cloneBook(book : Book) : Book {
        let newBook : Book = new Book();
        for(let property in book) {
            newBook[property] = book[property];
        }

        return newBook;
    }

    retrieveAll() : Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.apiUrl);
    }

    retrieveById(id : number) : Observable<Book> {
        return this.httpClient.get<Book>(`${this.apiUrl}/${id}`);
    }

    saveBook(book : Book) : Observable<Book> {
        if(book.id) {
            return this.httpClient.put<Book>(`${this.apiUrl}/${book.id}`, book);
        }
        return this.httpClient.post<Book>(this.apiUrl, book);
    }

}