import { Book } from "./book";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class BookService {

    private cloneBook(book : Book) : Book {
        let newBook : Book = new Book();
        for(let property in book) {
            newBook[property] = book[property];
        }

        return newBook;
    }

    retrieveAll() : Book[] {
        return BOOKS.map(this.cloneBook);
    }

    retrieveById(id : number) {
        return this.cloneBook(BOOKS.find((book : Book) => book.id === id));
    }

    saveBook(editedBook : Book) {
        BOOKS[BOOKS.findIndex((book : Book) => book.id === editedBook.id)] = editedBook;
    }

}

let BOOKS : Book[] = [
    {
        id: 2,
        author: 'George R. R. Martin',
        rating: 4.5,
        releaseDate: new Date('01/01/2001'),
        title: 'Winds of Winter',
    },
    {
        id: 3,
        author: 'F. C. Yee',
        rating: 3.25,
        releaseDate: new Date('01/02/2001'),
        title: 'The Dawn of Yangchen',
    },
    {
        id: 1,
        author: 'H. P. Lovecraft',
        rating: 5,
        releaseDate: new Date('01/03/2001'),
        title: 'At the Mountains of Madness',
    },
];