import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDpuJIBMB98EN2sShtj8H1fFfeehtLFzIs",
    authDomain: "twitter-f4e6f.firebaseapp.com",
    projectId: "twitter-f4e6f",
    storageBucket: "twitter-f4e6f.appspot.com",
    messagingSenderId: "1089944818112",
    appId: "1:1089944818112:web:31207fec5baeca129b7825"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//initiakise firestore object
  export const firestore = firebase.firestore()

  export default firebase;