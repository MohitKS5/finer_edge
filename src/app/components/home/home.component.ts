import { Component, OnInit } from '@angular/core';
import {generic_names} from '../../config/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = generic_names.slice(0, 13);
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
