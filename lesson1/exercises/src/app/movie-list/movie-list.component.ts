import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Polar Express', 'Frosty the Snowman', "It's a Wonderful Life", "Meet Me in St. Louis"];

   constructor() { }

   ngOnInit() {
   }

}
