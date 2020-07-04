import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { FormsModule } from '@angular/forms';
import { JugadoresService } from '../../servicios/jugadores.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  intro: boolean;

  public lottieConfig: Object;
    private anim: any;
    private animationSpeed: number = 1;

  constructor(private router: Router) {
    this.lottieConfig = {
      path: '../assets/ani/data.json',
     /*  renderer: 'canvas',
      autoplay: true, */
      loop: false
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }
  volver()
  {
    //PONER BINDEO PARA VOLVER
    this.router.navigateByUrl("")
  }

  
  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }



  ngOnInit() {
    console.log("tu vieja");

    this.intro = true;
  }
  salaDeJuegos() {
    this.router.navigateByUrl("/home");
    this.intro = false;
  }

}