import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Section1Component } from './home/section1/section1.component';

import { MenuComponent } from './menu/menu.component';
import { ContattaciComponent } from './contattaci/contattaci.component';
import { DoveSiamoComponent } from './dove-siamo/dove-siamo.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { Section2Component } from './home/section2/section2.component';
import { Section3Component } from './home/section3/section3.component';
import { Section4Component } from './home/section4/section4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Section1Component,
    MenuComponent,
    ContattaciComponent,
    DoveSiamoComponent,
    GalleriaComponent,
    Section2Component,
    Section3Component,
    Section4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
