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

  constructor(private router: Router) {
  }

  onSelect(i) {
    this.router.navigate(['/projects', i.index]);
  }

  ngOnInit() {
  }

}
