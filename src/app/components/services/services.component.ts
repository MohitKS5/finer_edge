import { Component, OnInit } from '@angular/core';
import {services} from '../../config/content';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public data: any = services;
  constructor() { }

  ngOnInit() {
  }

}
