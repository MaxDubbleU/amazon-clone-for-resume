// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6g5V9uZX49kWrMZ09WKqnfgZYjrA4KMs",
    authDomain: "clone-646be.firebaseapp.com",
    projectId: "clone-646be",
    storageBucket: "clone-646be.appspot.com",
    messagingSenderId: "217519935962",
    appId: "1:217519935962:web:94c683d95091aec63cb0e3",
    measurementId: "G-5MHFF8QVW7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };