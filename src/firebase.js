import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvF9DE011hdHRyXGJQZvDkiCTKyaps9ls",
  authDomain: "facebook-clone-d85ce.firebaseapp.com",
  databaseURL: "https://facebook-clone-d85ce.firebaseio.com",
  projectId: "facebook-clone-d85ce",
  storageBucket: "facebook-clone-d85ce.appspot.com",
  messagingSenderId: "313851131685",
  appId: "1:313851131685:web:fed356ed39acb089024ccc",
  measurementId: "G-SED9LH2Y44",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;