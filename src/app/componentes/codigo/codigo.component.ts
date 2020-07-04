import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  irA(opcion) {
    switch (opcion) {
      case 1:
        window.open('https://github.com/lucilarizzi/UTN-Labo4-LaComanda-NG');
        break;
      case 2:
        window.open('https://github.com/lucilarizzi/Ahorcado-en-JAVA');
        break;
      case 3:
        window.open('https://github.com/lucilarizzi/TP_Final_PPS_Mecon');
        break;

    }
  }
}
