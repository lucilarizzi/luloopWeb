import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  images = [
    {
      img: "../../../assets/disenio.gif", titulo:
        'Diseño Gráfico', description: ' Con mas de 9 años de experiencia en diseño y comunicacion', modal:'#economia'
    },
    {
      img: "../../../assets/programacion.gif", titulo:
        'Desarollo Web y Programacion', description: 'Tenes tu Propia pagina web',modal:'#hacienda'
    },
 /*    {
      img: "../../../assets/redes.jpg", titulo:
        'Marketing Digital', description: 'Aseoramiento y mantenimiento en Redes Sociales y posicionamiento online' ,modal:'#cnv'
    }
 */

  ];


  constructor() { }

  ngOnInit() {
  }

}
