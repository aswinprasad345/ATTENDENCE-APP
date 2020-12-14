import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDedW8kX-CA0fkHPIAxqzYm2zcGbZ0XHA0",
    authDomain: "student-atnedence-app.firebaseapp.com",
    databaseURL: "https://student-atnedence-app.firebaseio.com",
    projectId: "student-atnedence-app",
    storageBucket: "student-atnedence-app.appspot.com",
    messagingSenderId: "466729173406",
    appId: "1:466729173406:web:fabd91f79c1becef97968f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();