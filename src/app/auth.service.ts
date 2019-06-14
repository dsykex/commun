import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

export interface tvarr {
  user: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getUserInfo() : Observable<any>
  {
    let userObs = new Observable(watcher => {
      firebase.auth().onAuthStateChanged(authData => {
        if(!authData)
        {
          watcher.next({});
          watcher.complete();
        }
        else
        {
          let db = firebase.firestore().collection('users');
          db.doc(authData.email).get().then(user => { 
            if(user.exists)
            {
              watcher.next(user.data());
              watcher.complete();
            }
          })
        }
      })
    });

    return userObs;
  }
}
