import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrl = environment.imageUrl;
  items = [
    { heading: 'Green energy', imageUrl: 't2.jpg', alt: 'Forest'},
    { heading: 'Our top picks', imageUrl: 'owl.jpg', alt: 'Happy family'},
    { heading: 'Big brands', imageUrl: 'tree.jpg', alt: 'Big ben'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
