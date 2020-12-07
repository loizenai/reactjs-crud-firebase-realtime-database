import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyBVm7nQJqpJxXMr63spZydivMPgoECs_R0",
    authDomain: "loizenai-reactjs-crud-db.firebaseapp.com",
    projectId: "loizenai-reactjs-crud-db",
    storageBucket: "loizenai-reactjs-crud-db.appspot.com",
    messagingSenderId: "610864533391",
    appId: "1:610864533391:web:c3adddd2aa1ac818fe45fa",
    measurementId: "G-LD2JGWF657"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();