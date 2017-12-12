import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  fakeit = [[2, 1, 3, 1], [1, 4, 3, 1], [4, 3, 1]];
  @Input() data;

  ngOnInit() {
  }

}
