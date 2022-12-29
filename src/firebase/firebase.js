
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDQ7-5C6d-RN_UlRvVMUGVhm8yroUJYHVQ",
  authDomain: "news-e5520.firebaseapp.com",
  projectId: "news-e5520",
  storageBucket: "news-e5520.appspot.com",
  messagingSenderId: "286944804774",
  appId: "1:286944804774:web:3f6f2a38d3d1a1a2615967"
};


const app = initializeApp(firebaseConfig);
export {app}