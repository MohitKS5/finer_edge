import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {RoutingModule} from './app.route';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SlickModule} from 'ngx-slick';
import {SlickComponent} from './components/slick/slick.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {NgsRevealModule} from 'ng-scrollreveal';
import { CollectionComponent } from './components/collection/collection.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { SocLinksComponent } from './components/soc-links/soc-links.component';
import {MarkdownToHtmlModule} from 'ng2-markdown-to-html';
import {MatSidenavModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PhotosComponent } from './components/photos/photos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SlickComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ProjectsComponent,
    CollectionComponent,
    PreloaderComponent,
    SocLinksComponent,
    GalleryComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTabsModule,
    SlickModule.forRoot(),
    NgsRevealModule.forRoot(),
    MarkdownToHtmlModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
