// 'use server'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore';

// Load .env variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// const firebaseApp =
//   getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// export const firebaseAuth = getAuth(firebaseApp);
// export const db

const firebaseApp = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth()
export const db = getFirestore(firebaseApp);
