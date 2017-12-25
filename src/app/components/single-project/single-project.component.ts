import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {numbers, generic_names} from '../../config/projects';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {
  public dir: string;
  public names = generic_names;
  cap: Array<string>;

  constructor(private router: Router) {
  }

  populate(): number {
    const routesegements = this.router.url.split('/').slice(-4);
    const index = routesegements[3].split('-');
    this.dir = '/assets/projects/' + routesegements[1] + '/' + routesegements[2] + '/';
    this.cap = [routesegements[1], routesegements[2]];
    return numbers[index[0]][index[1]];
  }

  beautify(str: string) {
    return str.replace(/[-_.0-9]+/g, ' ').replace('jpg', '').toUpperCase();
  }

  ngOnInit() {
    this.populate();
  }

}
