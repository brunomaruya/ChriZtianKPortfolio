// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCuRtAO17vMSou57GVFEAC1tzHEitdDawY',
  authDomain: 'chriztiank-92a86.firebaseapp.com',
  projectId: 'chriztiank-92a86',
  storageBucket: 'chriztiank-92a86.appspot.com',
  messagingSenderId: '783771587054',
  appId: '1:783771587054:web:63ec62c5321c5d8b253eff',
  measurementId: 'G-KT7J3TD376',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
