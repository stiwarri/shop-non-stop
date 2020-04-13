import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB9pzWlQNrrP9w8fXBW8liiYrLy_xPouYQ",
    authDomain: "shop-non-stop.firebaseapp.com",
    databaseURL: "https://shop-non-stop.firebaseio.com",
    projectId: "shop-non-stop",
    storageBucket: "shop-non-stop.appspot.com",
    messagingSenderId: "795670898069",
    appId: "1:795670898069:web:994be939e1b1bc0c58429c",
    measurementId: "G-J1XCV71R6J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
