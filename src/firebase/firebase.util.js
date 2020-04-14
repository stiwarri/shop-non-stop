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

export const createUserProfileDocument = async (userAuth, additionalDetails) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdDate = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdDate,
                ...additionalDetails
            });
        } catch (err) {
            console.log(err);
        }
    }

    return userRef;
}

export default firebase;
