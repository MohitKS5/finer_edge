import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public status: boolean = true;
  public selectedindex: number = 0;
  categories = [
    'Residential Houses',
    'Stadiums',
    'Interiors',
    'Hospitality',
    'Convention Center',
    'Mall and Multiplex',
    'Bungalows',
    'Factory',
    'Hospitals',
  ];
  constructor() { }
  ngOnInit() {
  }

}
