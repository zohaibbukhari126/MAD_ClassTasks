// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKZ0jdzpq590csSMO0G3l3hypqfXTkNZ4",
    authDomain: "react-native-5th-sem-class.firebaseapp.com",
    projectId: "react-native-5th-sem-class",
    storageBucket: "react-native-5th-sem-class.appspot.com",
    messagingSenderId: "808666086087",
    appId: "1:808666086087:web:d78605fdc1691253605ce2"
};

// Initialize Firebase`
const app = firebase.initializeApp(firebaseConfig);

// Initialize services
export const my_auth = firebase.auth();
export const db = firebase.firestore();
