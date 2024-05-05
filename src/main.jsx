import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import WebRoutes from './routes/WebRoutes'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";



 const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};


//Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
console.log(analytics, db);





ReactDOM.createRoot(document.getElementById('root')).render(
  <WebRoutes />
)
