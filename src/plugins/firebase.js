import Firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCRUsO8i5tOR7doKWGE7ycURCKMgOQd3Fc",
  authDomain: "amaterasu-cleaning.firebaseapp.com",
  projectId: "amaterasu-cleaning",
  storageBucket: "amaterasu-cleaning.appspot.com",
  messagingSenderId: "516212242918",
  appId: "1:516212242918:web:4ac7269b40946cfe8afe27",
  measurementId: "G-KPVSYVH7LR",
};

const firebase = Firebase.initializeApp(config);
export const db = firebase.firestore();

export default firebase;
