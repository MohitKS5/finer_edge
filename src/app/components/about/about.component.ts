import { Component, OnInit } from '@angular/core';
import {about} from '../../config/content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public data: string[] = about;
  constructor() { }

  ngOnInit() {
  }

}
