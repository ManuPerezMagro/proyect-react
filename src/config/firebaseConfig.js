import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgmz9ZwKKGfzni8T2GGPmnWbGR8uCb_sw",
  authDomain: "tech-house-d5a45.firebaseapp.com",
  projectId: "tech-house-d5a45",
  storageBucket: "tech-house-d5a45.appspot.com",
  messagingSenderId: "663038914202",
  appId: "1:663038914202:web:9e2e6e7065e1614100f923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Exportamos nuestra base de datos a toda la app
export { db, firebaseConfig}