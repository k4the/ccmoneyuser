import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrl = environment.imageUrl;
  items = [
    { heading: 'Green energy', imageUrl: 't2.jpg', alt: 'Forest' },
    { heading: 'Our top picks', imageUrl: 'owl.jpg', alt: 'Happy family' },
    { heading: 'Big brands', imageUrl: 'tree.jpg', alt: 'Big ben' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  gotoPage(): void {
    this.router.navigate(['/results']);
  }
}
