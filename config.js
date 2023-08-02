import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB5ewxQD3KXHeYDHRlrNoseTX4wAwcnWpA",
  authDomain: "bibliotecaeletronica-8a717.firebaseapp.com",
  projectId: "bibliotecaeletronica-8a717",
  storageBucket: "bibliotecaeletronica-8a717.appspot.com",
  messagingSenderId: "1013756427382",
  appId: "1:1013756427382:web:6c34c26cd1aec24fb67357"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
