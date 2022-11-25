import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCG2TmlBoUbL5sgI5TZ9V_q1LlcPzUlgxM",
  authDomain: "authentication-sample-project.firebaseapp.com",
  databaseURL: "http://authentication-sample-project.firebaseio.com",
  projectId: "authentication-sample-project",
  storageBucket: "authentication-sample-project.appspot.com",
  messagingSenderId: "968629488266",
  appId: "1:968629488266:web:bd2a71ff3a9f8e95a77b73",
  measurementId: "G-TM35QZ2N2T"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()