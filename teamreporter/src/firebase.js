import Firebase from 'firebase/compat/app'
import  'firebase/compat/auth'
import  'firebase/compat/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBgoacPeuVBgEkL3BpuBXAOiaiMYxjeR3s",
    authDomain: "teamreporterwithreact.firebaseapp.com",
    projectId: "teamreporterwithreact",
    storageBucket: "teamreporterwithreact.appspot.com",
    messagingSenderId: "931542164078",
    appId: "1:931542164078:web:4a5fb640514d3ee0da7c7f",
    measurementId: "G-EFN1JXSVKW"
};

export const fire = Firebase.initializeApp(firebaseConfig)
// console.log(fire)
export const auth = Firebase.auth()
// console.log(auth)
export const Firestore = Firebase.firestore()
