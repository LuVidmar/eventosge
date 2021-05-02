import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { userData } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: userData;
  password: string;

  constructor(private auth: AngularFireAuth) { }

  registerUser(u: userData, p: string) {
    this.user = u;
    this.password = p;

    this.auth.createUserWithEmailAndPassword(u.email,p).catch( function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

}