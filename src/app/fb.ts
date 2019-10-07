import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDdeEahrBiiFWcghRiZRxZWYcTSPCgdYo8",
    authDomain: "warhol-a1a0e.firebaseapp.com",
    databaseURL: "https://warhol-a1a0e.firebaseio.com",
    projectId: "warhol-a1a0e",
    storageBucket: "warhol-a1a0e.appspot.com",
    messagingSenderId: "379087008754",
    appId: "1:379087008754:web:07acab08d2a9c3d5"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();