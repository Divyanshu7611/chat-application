import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCDL559gcxNJHL2TaqGNhSdm1CRKaCyAIg",
    authDomain: "whatsapp-clone-b9434.firebaseapp.com",
    projectId: "whatsapp-clone-b9434",
    storageBucket: "whatsapp-clone-b9434.firebasestorage.app",
    messagingSenderId: "823025389543",
    appId: "1:823025389543:web:4dae156e5de0a80af2f742",
    measurementId: "G-9VYZFKJS23"
  };

  const app = initializeApp(firebaseConfig)
  export const firebaseAuth = getAuth(app)