import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAPM93_gLBbxjAYUmrmxEdzAIqz2XXY_MA",
    authDomain: "usman-287506.firebaseapp.com",
    databaseURL: "https://usman-287506-default-rtdb.firebaseio.com",
    projectId: "usman-287506",
    storageBucket: "usman-287506.appspot.com",
    messagingSenderId: "536243701316",
    appId: "1:536243701316:web:11a81b9be686550ec6de11",
    measurementId: "G-1PP88D686E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
// export default fireDb.database().ref();