import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs  } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {

//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
// };
// import { initializeApp, getApps } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// Initialize Firebase


const firebaseConfig = {
  apiKey: "AIzaSyCU4Dj9eaDSJtTmQyJ_TpCoY-MbVUJi8f0",
  authDomain: "finalyear-1d443.firebaseapp.com",
  projectId: "finalyear-1d443",
  storageBucket: "finalyear-1d443.appspot.com",
  messagingSenderId: "400574540750",
  appId: "1:400574540750:web:8418408a060c3334c8199f",
  measurementId: "G-N519NS3TC1"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export async function isUserIdTaken(userId) {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}
export async function isemailIdTaken(email) {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('email', '==', email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export { app, db, auth }; 