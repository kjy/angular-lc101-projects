import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Photos';
  image1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Liberty-statue-from-below.jpg/800px-Liberty-statue-from-below.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Four_freedoms_human_rights.jpg';

  constructor() { }

  ngOnInit() {
  }

}