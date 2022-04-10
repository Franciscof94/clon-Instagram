import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInAnonymously, updateProfile  } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADD8AComKh-hQKuQquvY8OjGYo2KDxB6g",
  authDomain: "instagram-clon-82660.firebaseapp.com",
  projectId: "instagram-clon-82660",
  storageBucket: "instagram-clon-82660.appspot.com",
  messagingSenderId: "545889891313",
  appId: "1:545889891313:web:8c1fdb2a1747fbb39a8a50",
  measurementId: "G-B9066DPF6K"
};

export async function upload(file, currentUser, setLoading) {
  const storage = getStorage();
  const fileRef = ref(storage, currentUser.uid + '.png');
  
  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);
  console.log(photoURL)

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
