import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthorComponent } from './author/author.component';
import { TeamComponent } from './team/team.component';
import { SkillComponent } from './skill/skill.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { WaypointComponent } from './waypoint/waypoint.component';
import { BlogComponent } from './blog/blog.component';
import { VideoComponent } from './video/video.component';
import { ClientComponent } from './client/client.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { ImageResponsiveComponent } from './image-responsive/image-responsive.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    TeamComponent,
    SkillComponent,
    ServicesComponent,
    WorkComponent,
    WaypointComponent,
    BlogComponent,
    VideoComponent,
    ClientComponent,
    TestimonialsComponent,
    ContactComponent,
    ImageResponsiveComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
