import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {generic_names, youtube} from '../../config/projects';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

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
  finalData: Array<any>;
  public div: number;
  public tooless: boolean;
  public clickedelem: number;
  public elementtoshow: any;
  public len = 10;
  walkthrough = true;
  showiframe = false;
  id = 'w-kG6Xm7Zt0';
  @Output() elementClicked = new EventEmitter();
  public mobile = window.screen.width < 1023;

  constructor(private sanitizer: DomSanitizer, private router: Router) {
  }

  sanitize() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.id + '?autoplay=1;rel=0');
  }

  clicked(index: number, path: string) {
    let el = [index, path];
    this.clickedelem = index;
    this.elementtoshow = path;
    this.elementClicked.emit(el);
  }

  next() {
    this.elementtoshow = generic_names[+this.elementtoshow];
  }

  previous() {
    this.elementtoshow = generic_names[+this.elementtoshow - 2];
  }

  beautify(text) {
    return text.replace(/[-_.0-9]+/g, ' ');
  }

  splitArray() {
    this.finalData = [[], [], []];
    let subdir = this._array;
    let len = subdir.length;
    this.len = len;
    this.tooless = len < 3;
    this.div = Math.round(len / 3);
    for (let i = 0; i < len; i++) {
      this.finalData[i % 3].push(subdir[i]);
    }
    return this.finalData;
  }

  ngOnInit() {
    this.splitArray();
    this.id = youtube[this.router.url.split('/').slice(-2)[0].replace(/[-.0-9]+/g, '')];
  }
}
