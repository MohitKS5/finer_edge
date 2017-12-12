import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    '/assets/images/slides/02.ANZI_FOOTBALL_STADIUM_RUSSIA.jpg',
    '/assets/images/slides/01.EKANT.jpg',
    '/assets/images/slides/03.CELESTIAL_CITY.jpg',
    '/assets/images/slides/04.walchand_engineering_college.jpg'
  ];
  slideConfig = {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'autoplay': true,
    'autoplayspeed': 2000,
    'infinite': true
  };

  constructor() { }

  ngOnInit() {
  }

}
