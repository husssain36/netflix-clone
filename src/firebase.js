import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "netflix-clone-bc1ed.firebaseapp.com",
    projectId: "netflix-clone-bc1ed",
    storageBucket: "netflix-clone-bc1ed.appspot.com",
    messagingSenderId: "62595114380",
    appId: "1:62595114380:web:954b1cb3ab17310e5a22a9"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();

  export {auth}
  export default db;