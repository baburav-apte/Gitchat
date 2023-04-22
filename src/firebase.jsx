import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABf1HAg98d85KL7rXEwzQcDnaDamyyfIU",
  authDomain: "gitchat-731a8.firebaseapp.com",
  projectId: "gitchat-731a8",
  storageBucket: "gitchat-731a8.appspot.com",
  messagingSenderId: "532790389021",
  appId: "1:532790389021:web:f3fdc2555efc91267d99f4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

