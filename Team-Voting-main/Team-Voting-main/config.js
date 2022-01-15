import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBCLFJ1XLycptB8E0UdNElwBZdHQHVUKvs",
    authDomain: "c-66-e4575.firebaseapp.com",
    projectId: "c-66-e4575",
    storageBucket: "c-66-e4575.appspot.com",
    messagingSenderId: "999431364200",
    appId: "1:999431364200:web:2f5356cdb0cfb2ea6325dd"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();