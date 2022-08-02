// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQtJ4gkhXlFZU28v1PljY-0jw2p-49eSU",
  authDomain: "yoursports-352701.firebaseapp.com",
  projectId: "yoursports-352701",
  storageBucket: "yoursports-352701.appspot.com",
  messagingSenderId: "160950711238",
  appId: "1:160950711238:web:52a039fb1d7499dee338c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;