import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
})

export class BookList {
    @Input()
    listWidth : number;
    listHeigth : number;
}