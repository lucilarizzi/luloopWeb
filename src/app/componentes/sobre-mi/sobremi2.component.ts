import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi2',
  templateUrl: './sobremi2.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class Sobremi2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  descargar()
  {
    window.open('../../../assets/yo/LucilaRIzzi-CV-2020v4.pdf');
  }


}
