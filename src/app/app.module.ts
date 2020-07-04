import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { HomeComponent } from './componentes/home/home.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { JugadoresService } from './servicios/jugadores.service';
import { AgmCoreModule } from '@agm/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import * as $ from "jquery";
import { PrueubaParallaxComponent } from './componentes/prueuba-parallax/prueuba-parallax.component';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery';
import { GaleriaDerbypaloozaComponent } from './componentes/galeria-derbypalooza/galeria-derbypalooza.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { TrabajosDestacadosComponent } from './componentes/trabajos-destacados/trabajos-destacados.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { CodigoComponent } from './componentes/codigo/codigo.component';
import { ModalesComponent } from './componentes/modales/modales.component';
import { TwoScreensComponent } from './componentes/two-screens/two-screens.component';
import { ParallaxDirective } from './directivas/parallax.directive';
import { PlaceHolderInicioComponent } from './componentes/place-holder-inicio/place-holder-inicio.component';
import { NuevoHomeComponent } from './componentes/nuevo-home/nuevo-home.component';
import { Sobremi2Component } from './componentes/sobre-mi/sobremi2.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ClientesPipe } from './componentes/clientes.pipe';
import { ServiciosComponent } from './componentes/servicios/servicios.component'; // <----------------- angular-modal-gallery library import


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent, 
    HomeComponent, PrueubaParallaxComponent, GaleriaDerbypaloozaComponent, CarrouselComponent, TrabajosDestacadosComponent, SobreMiComponent, CodigoComponent, ModalesComponent, TwoScreensComponent, ParallaxDirective, PlaceHolderInicioComponent, NuevoHomeComponent, Sobremi2Component, ClientesComponent, ClientesPipe, ServiciosComponent, 
  ],
  imports: [
    ModalGalleryModule.forRoot(), // <-------------------------------------------- @ks89/angular-modal-gallery module import
    BrowserModule,
    AppRoutingModule, FormsModule, NgbModule,
    MDBBootstrapModule.forRoot(),
    LottieAnimationViewModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot() 

  ],
  providers: [JugadoresService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
