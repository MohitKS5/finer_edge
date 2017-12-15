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
  finalData: Array<any> = [];
  public div : number;
  @Output() elementClicked = new EventEmitter();

  constructor() {
  }

  clicked(index: number, path: string){
    let el = [index, path];
    this.elementClicked.emit(el);
  }

  beautify(text) {
    return text.replace(/[-_0-9]+/g, ' ');
  }

  splitArray() {
    let subdir = this._array;
    let len = subdir.length;
    this.div = Math.floor( len / 3);
    this.finalData.push(subdir.slice(0, this.div));
    this.finalData.push(subdir.slice(this.div, 2 * this.div));
    this.finalData.push(subdir.slice(2 * this.div, len));
  }

  ngOnInit() {
    this.splitArray();
  }
}
