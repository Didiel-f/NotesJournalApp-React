import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDkli4B9mqd0MD1gKBR_ObTpQptmQ6-lZc",
    authDomain: "react-app-journal-8db1f.firebaseapp.com",
    databaseURL: "https://react-app-journal-8db1f.firebaseio.com",
    projectId: "react-app-journal-8db1f",
    storageBucket: "react-app-journal-8db1f.appspot.com",
    messagingSenderId: "225053068686",
    appId: "1:225053068686:web:e4d872aede4041ede228df",
    measurementId: "G-P9CYEL3C37"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  };