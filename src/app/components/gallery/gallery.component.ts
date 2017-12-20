import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {a, data} from '../../config/projects';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  fakeit = [[2, 1, 3, 1], [1, 4, 3, 1], [4, 3, 1]];
  @Input() data;
  final_array;

  constructor(private router: Router) {
  }

  onSelect(i) {
    this.router.navigate(['/projects', i.index]);
  }

  go(i) {
    this.router.navigate(['/projects', i]);
  }

  splitArray() {
    this.final_array = [[], [], []];
    for (let i = 0; i < 10; i++) {
      this.final_array[i % 3].push(a[i] + '/' + data['_' + i][0] + '/01.jpg');
    }
    return this.final_array;
  }

  ngOnInit() {
    this.splitArray();
    console.log(this.final_array);
  }
}
