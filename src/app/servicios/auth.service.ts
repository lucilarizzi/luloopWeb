import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user, "google");
  }

  async githubSignin() {
    const provider = new auth.GithubAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return  this.updateUserDataGithub(credential.user, "github", provider); 
  }
  
  private updateUserDataGithub(user, donde, provider) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    console.info("user.credential",user.providerData['0']);
 
    const data = {
      uid: user.providerData['0'].uid,
      email: user.providerData['0'].email,
      displayName: user.providerData['0'].displayName,
      photoURL: user.providerData['0'].photoURL,
      from: user.providerData['0'].providerId
    }

    userRef.set(data, { merge: true })

  }


  private updateUserData(user, donde) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);   

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      from: donde
    }

    userRef.set(data, { merge: true })

  }


  async signOut() {
    await this.afAuth.auth.signOut();

  }
  
  whoIsLogIn() {   
   return  this.afAuth.auth.currentUser;
  }
  whoIsTodo() {   
   return  this.afAuth.auth
  }



















}