import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ContactComponent} from './components/contact/contact.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {PhotosComponent} from './components/photos/photos.component';
import {AwardsComponent} from './components/awards/awards.component';
import {SingleProjectComponent} from './components/single-project/single-project.component';
import {ClientsComponent} from './components/clients/clients.component';
import {TabsComponent} from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {
        path: ':id',
        component: TabsComponent,
      },
      {
        path: '',
        redirectTo: '01',
        pathMatch: 'prefix'
      }
    ]
  },
  {
    path: 'gallery/:dir/:subdir/:index',
    component: SingleProjectComponent
  },
  {
    path: 'awards',
    component: AwardsComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {
}
