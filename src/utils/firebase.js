import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_XGOEPE48cGuspC6wAmyTgpPqEMlIgPg",
  authDomain: "give-ummah.firebaseapp.com",
  projectId: "give-ummah",
  storageBucket: "give-ummah.appspot.com",
  messagingSenderId: "832568068596",
  appId: "1:832568068596:web:a99bb1d5169a3b93c411a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
