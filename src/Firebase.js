import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "Enter--your--api--key",
  authDomain: "authentication-sample-project.firebaseapp.com",
  databaseURL: "http://authentication-sample-project.firebaseio.com",
  projectId: "authentication-sample-project",
  storageBucket: "authentication-sample-project.appspot.com",
  messagingSenderId: "enter--id--of--yours",
  appId: "enter--your--firebase-app--id",
  measurementId: "enter--your--measurement--id"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
