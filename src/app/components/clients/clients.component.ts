import {Component, OnInit} from '@angular/core';
import {clients} from '../../config/content';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients = clients;

  constructor() {
  }

  beautify(str: string) {
    return str.replace(/[-_.0-9]+/g, ' ').replace('jpg', '').toUpperCase();
  }

  ngOnInit() {
  }

}
