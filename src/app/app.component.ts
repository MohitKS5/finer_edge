import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  title = 'app';

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (window.screen.width > 1023) {
        document.querySelector('.mynav').scrollIntoView({behavior: 'smooth'});
      } else {
        window.scrollTo(0, 0);
      }
    });
  }
}
