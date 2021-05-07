import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMXtthiBybaTBMf8ukIRmC_DCp3Pl2uUY",
    authDomain: "react-0000todo-app.firebaseapp.com",
    projectId: "react-0000todo-app",
    storageBucket: "react-0000todo-app.appspot.com",
    messagingSenderId: "796912014042",
    appId: "1:796912014042:web:fbff8922b53383a0484be3",
    measurementId: "G-J29BBRLPK8"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export default db;