import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css'],
})


export class StarsRating implements OnChanges{
    @Input()
    rating : number = 0;

    starsDivWidth : number;

    ngOnChanges() {
        this.starsDivWidth = (this.rating * 12) + 6;
    }
}