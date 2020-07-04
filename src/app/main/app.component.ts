import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bootAngularPrueba2';

  hold;
  constructor() {
    this.hold = true;
  }

  ngOnInit() {
    setTimeout(() => {
      console.log("hola");
      this.hold = false;
    }, 2000);
    setTimeout(() => {
    });
  }




}
