import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1ViX6fx68gvStNzN_LhSZcoXExKzxZCA",
    authDomain: "proj-firebase-8af99.firebaseapp.com",
    databaseURL: "https://proj-firebase-8af99.firebaseio.com",
    projectId: "proj-firebase-8af99",
    storageBucket: "",
    messagingSenderId: "144953194867",
    appId: "1:144953194867:web:c3e96e72cde381cacd6d06"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore();

export default firebase;