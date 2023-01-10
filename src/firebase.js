import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBrScvQuOCAsdSOholhGJQY3zew44qI9dg",
  authDomain: "facebook-clone-aec09.firebaseapp.com",
  projectId: "facebook-clone-aec09",
  storageBucket: "facebook-clone-aec09.appspot.com",
  messagingSenderId: "915125200655",
  appId: "1:915125200655:web:a722440ec537a11eff007a",
  measurementId: "G-D3ZR4REFW8"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};