import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  descargar()
  {
    window.open('../../../assets/yo/LucilaRIzzi-CV-2020v4.pdf');
  }


}
