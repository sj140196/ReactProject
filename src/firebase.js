/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfl-AqvBWQgnSKuOgt0NkYuWj5TmVjAk8",
  authDomain: "my-app-77e81.firebaseapp.com",
  databaseURL: "https://my-app-77e81-default-rtdb.firebaseio.com",
  projectId: "my-app-77e81",
  storageBucket: "my-app-77e81.appspot.com",
  messagingSenderId: "1013559306306",
  appId: "1:1013559306306:web:084c44b864798b685d25db",
  measurementId: "G-9T01LJB72W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
// src/firebase.js
import { initializeApp } from 'firebase/app';

import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfl-AqvBWQgnSKuOgt0NkYuWj5TmVjAk8",
  authDomain: "my-app-77e81.firebaseapp.com",
  databaseURL: "https://my-app-77e81-default-rtdb.firebaseio.com",
  projectId: "my-app-77e81",
  storageBucket: "my-app-77e81.appspot.com",
  messagingSenderId: "1013559306306",
  appId: "1:1013559306306:web:40de6b5a04ed255f5d25db",
  measurementId: "G-B7DQ5KNKH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };