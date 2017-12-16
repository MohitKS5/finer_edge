import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Input() _array: Array<string>;
  @Input() dir: String;
  @Input() _caption: boolean;
  @Input() ext: string;
  finalData: Array<any> = [[], [], []];
  public div: number;
  public tooless: boolean;
  @Output() elementClicked = new EventEmitter();
  public mobile = window.screen.width < 1023;
  constructor() {
  }

  clicked(index: number, path: string) {
    let el = [index, path];
    this.elementClicked.emit(el);
  }

  beautify(text) {
    return text.replace(/[-_.0-9]+/g, ' ');
  }

  splitArray() {
    let subdir = this._array;
    let len = subdir.length;
    this.tooless = len < 3;
    this.div = Math.round(len / 3);
    for (let i = 0; i < len; i++) {
      this.finalData[i % 3].push(subdir[i]);
    }
  }

  ngOnInit() {
    this.splitArray();
  }
}
