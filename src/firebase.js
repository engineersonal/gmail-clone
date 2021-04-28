import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3pBIVVsogAN6Bd7ujfDnzochb88a8v0I",
  authDomain: "clone-b1d94.firebaseapp.com",
  projectId: "clone-b1d94",
  storageBucket: "clone-b1d94.appspot.com",
  messagingSenderId: "147053187526",
  appId: "1:147053187526:web:c8aa1dbd781a7dc151e2c7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
