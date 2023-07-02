import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DoveSiamoComponent } from './dove-siamo/dove-siamo.component';
import { ContattaciComponent } from './contattaci/contattaci.component';

const routes: Routes = [
  { path: "", component: HomeComponent },



  //NavBar
  { path: "menu", component: MenuComponent },
  { path: "posizione", component: DoveSiamoComponent },
  { path: "contattaci", component: ContattaciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
