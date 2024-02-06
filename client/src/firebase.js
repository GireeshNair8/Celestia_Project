// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'stellarium-b5b96.firebaseapp.com',
  projectId: 'stellarium-b5b96',
  storageBucket: 'stellarium-b5b96.appspot.com',
  messagingSenderId: '1096220501268',
  appId: '1:1096220501268:web:b73bde13f090b7c7c50e01',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
