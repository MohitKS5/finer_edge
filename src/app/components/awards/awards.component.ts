import {Component, OnInit} from '@angular/core';
import {awards} from '../../config/content';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  public data: Array<string> = awards;
  public images = ['01', '02', '03', '04', '05', '06', '07', '08'];
  constructor() {
  }

  ngOnInit() {
  }

}
