import { Book } from "./book";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class BookService {

    retrieveAll() : Book[] {
        return BOOKS;
    }

}

const BOOKS : Book[] = [
    {
        id: 2,
        author: 'George R. R. Martin',
        rating: 4.5,
        releaseDate: '01/01/0001',
        title: 'Winds of Winter',
    },
    {
        id: 3,
        author: 'F. C. Yee',
        rating: 3.25,
        releaseDate: '01/01/0001',
        title: 'The Dawn of Yangchen',
    },
    {
        id: 1,
        author: 'H. P. Lovecraft',
        rating: 5,
        releaseDate: '01/01/0001',
        title: 'At the Mountains of Madness',
    },
];