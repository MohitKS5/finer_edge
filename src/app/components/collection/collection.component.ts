import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collections = [
    {
      head: 'Awards',
      pic: '/awards/03',
      cont: 'In the journey of 15 yrs we received several awards for excellence in the design and architecture.'
    },
    {
      head: 'Projects',
      pic: '/residential_township/02-Woods Ville Pune/woods ville-Hotel-Low Resolution',
      cont: 'The list of magnificient and astounding projects successfully completed by finer edge team.'
    },
    {
      head: 'CLients',
      pic: '/slides/13.moti_interior',
      cont: 'Look at the vast number of organisations who trust us with their projects and money only to get best outcomes ever.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
