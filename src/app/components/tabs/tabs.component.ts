import {Component, Input, OnInit} from '@angular/core';
import {a, data} from '../../config/projects';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() foldernum: number;
  public a = a;
  public data = data;
  constructor( private router: Router) { }
  routeTo(element){
    const num = this.foldernum + '-' + element[0];
    this.router.navigate(['/gallery', a[this.foldernum], element[1], num]);
  }
  ngOnInit() {
  }

}
