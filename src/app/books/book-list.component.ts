import { Component, Input } from "@angular/core";
import { Book } from './book';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})

export class BookList {
    @Input()
    listWidth : number;
    @Input()
    listHeight : number;
    
    books : Book[] = [
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

}