import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDD3AeMyx-iD4S4J7ACSq2d1Vp5D3b5jC4",
  authDomain: "login-b6229.firebaseapp.com",
  projectId: "login-b6229",
  storageBucket: "login-b6229.firebasestorage.app",
  messagingSenderId: "849239025751",
  appId: "1:849239025751:web:fc73a7714f899f88a95b12"
};

const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;