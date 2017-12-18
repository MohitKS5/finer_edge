import {Component, Input, OnInit} from '@angular/core';
import {a, data} from '../../config/projects';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  foldernum: string;
  public a = a;
  private data = data;
  array: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  routeTo(element) {
    const num = this.foldernum + '-' + element[0];
    this.router.navigate(['/gallery', a[this.foldernum], element[1], num]);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.get('id'))
      .subscribe((res) => {
        this.foldernum = res;
        this.array = this.data['_' + this.foldernum];
      });
  }
}
