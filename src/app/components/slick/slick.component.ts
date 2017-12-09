import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.css']
})
export class SlickComponent implements OnInit {

  constructor() { }
  @Input() slides;
  @Input() slideConfig;
  ngOnInit() {
  }

}
