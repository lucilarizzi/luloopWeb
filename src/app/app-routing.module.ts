import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from '../app/componentes/home/home.component';
import {InicioComponent } from '../app/componentes/inicio/inicio.component';
import { PrueubaParallaxComponent } from './componentes/prueuba-parallax/prueuba-parallax.component';
import { TwoScreensComponent } from './componentes/two-screens/two-screens.component';
import { NuevoHomeComponent } from './componentes/nuevo-home/nuevo-home.component';


const routes: Routes = [
{ path:  '1', component:  HomeComponent},
{ path:  '', component: InicioComponent},
{ path:  '3', component: TwoScreensComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
