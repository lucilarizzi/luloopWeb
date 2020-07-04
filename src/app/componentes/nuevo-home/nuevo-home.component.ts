import { Component, OnInit, AfterViewInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ModalGalleryModule } from 'angular-modal-gallery';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-nuevo-home',
  templateUrl: './nuevo-home.component.html',
  styleUrls: ['./nuevo-home.component.css']
})
export class NuevoHomeComponent implements OnInit {





  intro: boolean;
  mostrarNav;
  dise;
  numeroFondo;
  otra;

  hold;

  images = [
    {
      img: "../../../assets/yo/economia.jpg", titulo:
        'Ministerio Economia', description: ' Trabajos para el Ministerio de Economía', modal:'#economia'
    },
    {
      img: "../../../assets/yo/hacienda.jpg", titulo:
        'Palacio de Hacienda', description: ' Iconografia del Palacio de Hacienda',modal:'#hacienda'
    },
    {
      img: "../../../assets/yo/cnv.jpg", titulo:
        'CNV', description: '  Rediseño Total de Imagen Institucional' ,modal:'#cnv'
    },
    {
      img: "../../../assets/cv/DJSHOPparaFB.jpg", titulo:
        ' Dj Shop', description: ' Diseño de Logo', modal:'dj'
    },
    {
      img: "../../../assets/cv/exclusivos.jpg", titulo:
        'Exclusivos Almacen de Campo', description: ' Diseño de Logo', modal:"excl"
    },
    {
      img: "../../../assets/cv/naiarabarto-01.png", titulo:
        'Naira', description: ' Trabajos para redes sociales',modal:'#nai'
    },
    {
      img: "../../../assets/yo/wonder.jpg", titulo:
        'Wonderclan', description: ' Diseño de evento de Redes',modal:'#wonder'
    },
    {
      img: "../../../assets/yo/2x4.png", titulo:
        '2x4 Roller Derby', description: 'Dirección de Arte y Gestión Creativa de 2x4 Roller Derby. ', modal:'#dospo'
      },
    
    {
      img: "../../../assets/yo/derbypalooza2.jpg", titulo:
        'Derbypalooza', description: 'Torneo de Roller Derby Diseño de logo y gráfica completa Mayo 2017',modal:'#derby'
      },
    


  ];


  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(private router: Router, @Inject(DOCUMENT) document) {
    this.hold = false;
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
      /*     this.fondoRandom(); */
    }

  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  ngOnInit() {
    setTimeout(() => {
      console.log("hola");
      this.hold = false;
    }, 2000);
    setTimeout(() => {

      this.fondoRandom();
    }, 2000);
    this.intro = true;
/*     var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ["Diseño", "Programacion", "Marketing Digital"],
        datasets: [
          {
            label: "Porcentaje",
            backgroundColor: ["3e95cd", "8e5ea2", "3cba9f"],
            data: [5000, 3000, 1900]
          }
        ]
      },
      options: {        
        legend: { display: false },
        title: {
          display: false,
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }]
        }
      }
    }); */
  }

  disenio() {
    this.dise = true;
  }
  cambiarPagina(numero) {
    this.router.navigateByUrl(numero);
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
