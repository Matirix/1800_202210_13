//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCDHLcfUmeQ4UTzQZV-_U5y-B1W8rM9J6o",
  authDomain: "olympix-e596b.firebaseapp.com",
  projectId: "olympix-e596b",
  storageBucket: "olympix-e596b.appspot.com",
  messagingSenderId: "937461293852",
  appId: "1:937461293852:web:51d8242f8356c91ce250d9",
  measurementId: "G-FBYTSY7T7W"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();