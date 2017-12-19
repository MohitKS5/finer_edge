import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  fakeit = [[2, 1, 3, 1], [1, 4, 3, 1], [4, 3, 1]];
  @Input() data;
  active = 3;

  constructor(private router: Router) {
  }

  onSelect(i) {
    this.router.navigate(['/projects', i.index]);
  }

  go(i){
    this.router.navigate(['/projects', i]);
  }

  logger(i) {
    console.log(i);
  }

  ngOnInit() {
    this.active = 3;
  }

}
