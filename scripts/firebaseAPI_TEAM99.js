//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyADb9LzJgJ4HF5XHinn_0w9mP01DffqpeI",
    authDomain: "fir-comp1800-8ac06.firebaseapp.com",
    projectId: "fir-comp1800-8ac06",
    storageBucket: "fir-comp1800-8ac06.appspot.com",
    messagingSenderId: "1063449532442",
    appId: "1:1063449532442:web:1fea00dd390743d98ed9a3",
    measurementId: "G-1FZQKJ57JE"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();