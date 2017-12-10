import { Component, OnInit } from '@angular/core';
import {contact} from '../../config/content';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data:any = contact;
  constructor() { }

  ngOnInit() {
  }

}
