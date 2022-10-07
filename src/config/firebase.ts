// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZQvFPC5eCqTUf03Qsxu3LiXuq6sL-Ujw",
  authDomain: "chatterbox-5e1b4.firebaseapp.com",
  projectId: "chatterbox-5e1b4",
  storageBucket: "chatterbox-5e1b4.appspot.com",
  messagingSenderId: "847689231057",
  appId: "1:847689231057:web:5023e4a9c2982ed87f33f0",
  measurementId: "G-VKJW5CVYWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);