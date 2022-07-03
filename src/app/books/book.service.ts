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

    deleteBook(book : Book) : Observable<any>{
        return this.httpClient.delete<any>(`${this.apiUrl}/${book.id}`);
    }

}