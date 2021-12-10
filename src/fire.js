import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAegve-QApEdpBT3DnsFuC2MqDsPj5Q-R0",
    authDomain: "big-project-bd81d.firebaseapp.com",
    projectId: "big-project-bd81d",
    storageBucket: "big-project-bd81d.appspot.com",
    messagingSenderId: "420714099644",
    appId: "1:420714099644:web:db0a7b692ea61506d6f1b9"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;