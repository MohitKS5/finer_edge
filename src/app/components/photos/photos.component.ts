import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Input() _array: Array<string>;
  @Input() dir: String;
  @Input() _caption: boolean;
  finalData: Array<any> = [];

  constructor() {
  }

  beautify(text) {
    return text.replace(/[-_0-9]+/g, ' ');
  }

  splitArray() {
    let subdir = this._array;
    let len = subdir.length;
    let div = len / 3;
    this.finalData.push(subdir.slice(0, div));
    this.finalData.push(subdir.slice(div, 2 * div));
    this.finalData.push(subdir.slice(2 * div, len));
  }

  ngOnInit() {
    this.splitArray();
  }
}
