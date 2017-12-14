import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menus = ['about', 'awards', 'clients', 'projects', 'contact'];

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
