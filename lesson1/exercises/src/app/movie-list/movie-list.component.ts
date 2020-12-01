import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Like Hell or High Water', 'Oceans 8', 'The Big Short', 'Hillbilly Elegy'];

   constructor() { }

   ngOnInit() {
   }

}
