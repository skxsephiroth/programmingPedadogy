import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRouteModule } from './approute.module';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme.component';
import { RoadmapComponent } from './components/roadmap.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    RoadmapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MaterialModule,
    AppRouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
