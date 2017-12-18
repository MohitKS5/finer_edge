import { Component, OnInit } from '@angular/core';
import {about, services} from '../../config/content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public data: string[] = about;
  public data2 = services[0]['blocks'];
  constructor() { }

  ngOnInit() {
  }

}
