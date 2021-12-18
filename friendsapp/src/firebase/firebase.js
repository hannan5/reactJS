import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyA3qnKLSogB90jF9DI-Fkb-24vAZXw-ACw",
    authDomain: "friends-3285e.firebaseapp.com",
    projectId: "friends-3285e",
    storageBucket: "friends-3285e.appspot.com",
    messagingSenderId: "539004275552",
    appId: "1:539004275552:web:8c55b6604a9b922555ac05"
  };
export const fire = Firebase.initializeApp(firebaseConfig)
export const auth = Firebase.auth()
export const Firestore = Firebase.firestore()
export const storage = Firebase.storage()