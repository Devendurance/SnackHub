
import {initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiDtxTwayYLv0wcORn6uSS0hS-HVsiRqc",
  authDomain: "snackhub-a3a26.firebaseapp.com",
  projectId: "snackhub-a3a26",
  storageBucket: "snackhub-a3a26.appspot.com",
  messagingSenderId: "400444989607",
  appId: "1:400444989607:web:03b17965e5b83114c03b82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// export const firestore = getFirestore(app)
const auth = getAuth(app)
// export {app, firestore}
const provider = new GoogleAuthProvider();
const db = getFirestore(app)
const logOut = signOut(auth)
export {auth, provider, db,logOut }