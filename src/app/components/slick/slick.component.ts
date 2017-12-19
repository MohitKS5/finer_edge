import {Component, Input, OnInit} from '@angular/core';
import {slidenames} from '../../config/projects';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.css']
})
export class SlickComponent implements OnInit {
  constructor() {
  }

  @Input() slides;
  @Input() slideConfig;
  @Input() dir;
  names = slidenames;
  beautify(str: string) {
    return str.replace(/[-_.0-9]+/g, ' ').replace('jpg', '');
  }


  ngOnInit() {
  }
}
