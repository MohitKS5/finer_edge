import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  setone = [[2, 1, 3, 1], [1, 4, 3, 1], [4, 3, 1]];
  settwo = [[1, 4, 3, 1], [4, 3, 1], [2, 1, 3, 1]];
  public fakeit;
  constructor(private router: Router) {
    this.fakeit = this.router.url == '/projects' ? this.setone : this.settwo;
  }

  ngOnInit() {
  }

}
