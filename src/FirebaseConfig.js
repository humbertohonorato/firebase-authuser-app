import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2S_DbUMkNQfJRocpsvA0jTJzV7OrnYig",
  authDomain: "fir-authuser-app.firebaseapp.com",
  projectId: "fir-authuser-app",
  storageBucket: "fir-authuser-app.appspot.com",
  messagingSenderId: "863797055193",
  appId: "1:863797055193:web:0ef614524d9917f0db78c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
