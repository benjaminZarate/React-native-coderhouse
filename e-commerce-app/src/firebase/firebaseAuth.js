// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc3DXGFQ6B9-Qu5wkbyIBIiIO0c2ijKo8",
  authDomain: "e-commerce-react-native-7e80a.firebaseapp.com",
  databaseURL: "https://e-commerce-react-native-7e80a-default-rtdb.firebaseio.com",
  projectId: "e-commerce-react-native-7e80a",
  storageBucket: "e-commerce-react-native-7e80a.appspot.com",
  messagingSenderId: "97705247934",
  appId: "1:97705247934:web:188fc8fcf4c25c444d0aef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth();