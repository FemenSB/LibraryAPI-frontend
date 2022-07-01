import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './view-book.component.html',
    styleUrls: ['./view-book.component.css'],
})

export class ViewBook implements OnInit{
    
    courseId: number;

    constructor(private activatedRoute : ActivatedRoute) { }
    
    ngOnInit(): void {
        this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
    }
}