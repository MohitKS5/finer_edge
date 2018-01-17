import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {a, data} from '../../config/projects';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() data;
  final_array;
  arrange = [0, 5, 6, 1, 3, 7, 2, 8, 9, 4];
  mobile = window.screen.width < 1023;

  constructor(public router: Router) {
  }

  onSelect(i) {
    this.router.navigate(['/projects', i.index]);
  }

  go(i) {
    this.router.navigate(['/projects', i]);
  }

  splitArray() {
    this.final_array = [[a[0] + '/' + data['_0'][0] + '/01.jpg'], [], []];
    const div = this.mobile ? 2 : 3;
    for (let i = 1; i < 10; i++) {
      this.final_array[i % div].push(a[this.arrange[i]] + '/' + data['_' + this.arrange[i]][0] + '/01.jpg');
    }
    return this.final_array;
  }

  ngOnInit() {
    this.splitArray();
  }
}
