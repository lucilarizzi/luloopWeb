import { Injectable } from '@angular/core';
import { ArchivosJugadoresService } from './archivos-jugadores.service'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable, of, from } from 'rxjs';
import { Jugador } from '../clases/jugador';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase/app';



@Injectable()
export class JugadoresService {

  user$: Observable<any>;

  //peticion:any;
  constructor(
    private afAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private auth: AuthService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.fireStore.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )

  }

  filtrado: any;

  traertodos() {
    let items: Array<any>;
    items = new Array();
    console.log('traer');
    this.fireStore.collection('/users').snapshotChanges().forEach(user => {
      user.forEach(userData => {
        items.push(userData.payload.doc.data());
        let data = userData.payload.doc.data();
        let id = userData.payload.doc.id;
        console.log("ID: ", id, " Data: ", data);
      });
    });;


    return items

  };

  traerUno(mail) {
    return this.fireStore.collection('users').doc(mail).valueChanges();
   }

  enviar(jugadorNuevo: Jugador, uid2) {
    var sp = jugadorNuevo.email.split('@');
    return this.fireStore.collection('users').add({

      uid: uid2,
      email: jugadorNuevo.email,
      displayName: sp[0],
      photoURL: '"./assets/foto.png",',
      from: "site",
      clave: jugadorNuevo.clave
    })

  }

  async logInNoGooogle(algo, clave) {

    this.fireStore.collection('users', ref =>
      ref.orderBy('email', 'desc')).valueChanges().subscribe(
        val =>

          val.forEach(async element => {
            if (element['email'] == algo && element['from'] == "google") {
              this.auth.googleSignin();
            }
            else if (element['email'] == algo && element['from'] == "github.com") {
              this.auth.githubSignin();
            }

            else if (element['email'] == algo && element['clave'] == clave) {
              console.log("hola" + element['email'], element['clave']);
              const credential = await this.afAuth.auth.signInWithEmailAndPassword(element['email'], element['clave']);
              this.updateUserData(credential.user);
            }
          }
          )
      )
  }


  async registrarse(jugador) {
    /* this.afAuth.auth.createUserWithEmailAndPassword (this.email,  this.clave); */
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(jugador.email, jugador.clave);
    console.log(credential.user.uid + " credential.user.uid")
    this.enviar(jugador, credential.user.uid);
  }


  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.fireStore.doc(`users/${user.uid}`);

    var sp = user.email.split('@');
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: sp[0],
      photoURL: "./assets/foto.png",

    }
    userRef.set(data, { merge: true })
  }



  whoIsLogIn() {   
    return  this.afAuth.auth.currentUser;
   }

}



