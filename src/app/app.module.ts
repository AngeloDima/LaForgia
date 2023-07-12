import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { Section1Component } from './home/section1/section1.component';
import { Section2Component } from './home/section2/section2.component';
import { Section3Component } from './home/section3/section3.component';
import { Section4Component } from './home/section4/section4.component';
import { Section5Component } from './home/section5/section5.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Section1Component,

    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapLibreGLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
