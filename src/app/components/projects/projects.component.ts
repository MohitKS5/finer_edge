import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public status: boolean = true;
  public selectedindex = 0;
  categories = [
    'Residential Township',
    'Interiors',
    'Stadiums',
    'Hospitality',
    'Mall and Multiplex',
    'Institute',
    'Bungalows',
    'Commercial Building',
    'Hospitals',
    'Factory',
  ];
  constructor() { }
  ngOnInit() {
  }

}
