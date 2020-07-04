import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Jugador } from '../clases/jugador';
import { JugadoresService } from './jugadores.service';

@Injectable({
  providedIn: 'root'
})
export class PuntosService {

  constructor(
    public jugadores: JugadoresService,
    private fireStore: AngularFirestore,

  ) { }


  enviar(jugadorNuevo: Jugador, uid2, juego, comoLeFue) {
    var sp = jugadorNuevo.email.split('@');
    let fecha2 = new Date(Date.now());

    return this.fireStore.collection("juegos").add(
      {      
      uid: uid2,
      nombre: jugadorNuevo.nombre,
      email: jugadorNuevo.email,
      estado: comoLeFue,
      juego: juego,
      fecha: fecha2.getDay()+"/"+fecha2.getMonth()+"_"+fecha2.getUTCHours()+":"+fecha2.getMinutes()+":"+fecha2.getSeconds()
    })

  }

  traerTodoPorJuego(juego) {
    let items: Array<any>;
    items = new Array();
    console.log('traer');
    this.fireStore.collection('juegos/' + juego).snapshotChanges().forEach(user => { user = items}
  /*     user.forEach(userData => {
        items.push(userData.payload.doc.data());
        let data = userData.payload.doc.data();
        let id = userData.payload.doc.id;
        console.log("ID: ", id, " Data: ", data);
      });
    });; */);
    return items

  }

  traerTodo() {
  return  this.fireStore.collection('juegos', ref => ref.orderBy('fecha', 'desc')).valueChanges();   
  }






  traerTodoPorJugador(juego, uid) {
    let items: Array<any>;
    items = new Array();
    this.fireStore.collection('/juegos/' + juego).doc(uid).valueChanges().subscribe(juegos => {
     /*  juegos.forEach(userData => {
        items.push(userData.payload.doc.data());
        let data = userData.payload.doc.data();
        let id = userData.payload.doc.id;
        console.log("ID: ", id, " Data: ", data);
      }); */
    });;
    return items
  };







}
