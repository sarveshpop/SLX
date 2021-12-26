
import firebase from 'firebase/compat/app'
import {getFirestore} from '@firebase/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBE-j1lCvK9qIpYqUKjOOwlX1_tgGEv5oI",
  authDomain: "slxwebapp.firebaseapp.com",
  projectId: "slxwebapp",
  storageBucket: "slxwebapp.appspot.com",
  messagingSenderId: "860224487480",
  appId: "1:860224487480:web:efab113e9dc684b807e6cd",
  measurementId: "G-K737VX005H"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export
  export const db = getFirestore(Firebase);