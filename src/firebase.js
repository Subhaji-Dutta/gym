import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzXBTiqrcoWfBZWBVUcUgXQs0QK46jcwU",
  authDomain: "gymate-gym-b27c4.firebaseapp.com",
  projectId: "gymate-gym-b27c4",
  storageBucket: "gymate-gym-b27c4.appspot.com",
  messagingSenderId: "300564235489",
  appId: "1:300564235489:web:4c90a395626bcb211763a0",
  measurementId: "G-2690KW7NNB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
