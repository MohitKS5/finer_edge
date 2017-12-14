import {Component, Input, OnInit} from '@angular/core';
import {a, data} from '../../config/projects';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() foldernum: number;
  public a=a;
  public data=data;
  constructor() { }

  ngOnInit() {
  }

}
