
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA2VDL6ZXvmcj2WlwDiVA-oVlbloJP5rmo",
  authDomain: "shoppingweb-ddb33.firebaseapp.com",
  projectId: "shoppingweb-ddb33",
  storageBucket: "shoppingweb-ddb33.appspot.com",
  messagingSenderId: "402762393350",
  appId: "1:402762393350:web:1dda94199a973ce4412087",
  measurementId: "G-SJJLZ0417X"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

// export default db 
