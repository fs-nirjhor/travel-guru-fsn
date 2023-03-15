import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtY_UyZfGyOtIoZmqbYRupCd36y4dZxiw",
  authDomain: "travel-guru-fsn.firebaseapp.com",
  projectId: "travel-guru-fsn",
  storageBucket: "travel-guru-fsn.appspot.com",
  messagingSenderId: "632493134089",
  appId: "1:632493134089:web:fcc8369eb8d9e2b681c3d8",
  measurementId: "G-CG7DRLK3S9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);