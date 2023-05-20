import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTrjE3Ab_ZT_JS7Fv79GBJP_KRSyTAc5g",
  authDomain: "web-chat-e6835.firebaseapp.com",
  projectId: "web-chat-e6835",
  storageBucket: "web-chat-e6835.appspot.com",
  messagingSenderId: "15748649592",
  appId: "1:15748649592:web:5b9343b7ec1adab1c3538d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
