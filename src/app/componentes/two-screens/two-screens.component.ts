import { Component, OnInit, AfterViewInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ModalGalleryModule } from 'angular-modal-gallery';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-two-screens',
  templateUrl: './two-screens.component.html',
  styleUrls: ['./two-screens.component.css']
})
export class TwoScreensComponent implements OnInit {

  intro: boolean;
  mostrarNav;
  dise;
  numeroFondo;
  otra;

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(private router: Router, @Inject(DOCUMENT) document) {

    this.otra = false;

    AOS.init();
    this.lottieConfig = {
      path: '../assets/ani/data.json',
      loop: false
    };
    this.mostrarNav = false;
    this.dise = false;

    setTimeout(() => {
      let element = document.getElementById('construccion');
      element.classList.add('fadeOut');
      element.classList.remove('infinite');
    }, 3000);
    setTimeout(() => {
      let element = document.getElementById('construccion');
      element.classList.add('d-none');
    }, 14000);

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > (window.innerHeight / 5)) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
      element.classList.remove('d-none');
      element.classList.remove('slideOutUp');
      element.classList.add('animated');
      element.classList.add('slideInDown');
      this.mostrarNav = true;
    }
    else if (window.pageYOffset < (window.innerHeight / 5) && window.pageYOffset > 0) {
      let element = document.getElementById('navbar');
      element.classList.add('slideOutUp');
      this.mostrarNav = true;

    }
    else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
      element.classList.remove('flash');
      element.classList.add('d-none');
      //  element.classList.add('slideOutDown');
      this.fondoRandom();
    }
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  ngOnInit() {
    setTimeout(() => this.fondoRandom(), 1000);
    console.log("hola");
    this.intro = true;
  }

  disenio() {
    this.dise = true;
  }
  cambiarPagina() {
    this.router.navigateByUrl("1")
  }

  fondoRandom() {
    var fondo: Array<string>;
    fondo = new Array<string>();
    fondo.push('../../../assets/fondos/fondo.jpg');
    fondo.push('../../../assets/fondos/fondo.png');
    fondo.push('../../../assets/fondos/bartonai-01.png');
    fondo.push('../../../assets/fondos/ladrilloAzules-01.png');

    this.numeroFondo = Math.floor(Math.random() * fondo.length);
    console.log(fondo[this.numeroFondo]);

    let element2 = document.getElementById('fondo');
    element2.style.backgroundImage = 'url(' + fondo[this.numeroFondo] + ')';


  }

  cambiarImagen() {
    var fondo: Array<string>;
    fondo = new Array<string>();
    fondo.push('../../../assets/fondos/fondo.jpg');
    fondo.push('../../../assets/fondos/fondo.png');
    fondo.push('../../../assets/fondos/bartonai-01.png');
    fondo.push('../../../assets/fondos/ladrilloAzules-01.png');

    if ((this.numeroFondo + 1) == fondo.length) {
      this.numeroFondo = 0
    }
    else {
      this.numeroFondo++;
    }

    let element2 = document.getElementById('fondo');
    element2.style.backgroundImage = 'url(' + fondo[this.numeroFondo] + ')';


  }

}
