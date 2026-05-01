import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChbqvmrt-gPBNZyok04PNoWEJzUa_XzkE",
  authDomain: "mac-mep-website.firebaseapp.com",
  projectId: "mac-mep-website",
  storageBucket: "mac-mep-website.firebasestorage.app",
  messagingSenderId: "41554077669",
  appId: "1:41554077669:web:9b63395819a8d2d8be310c",
  measurementId: "G-ELEQ7YV5Y9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
