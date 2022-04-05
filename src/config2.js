import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBk5OLCOis05ED5vPnVsYSKdv0gYm5recg",
  authDomain: "sahyogdatabase.firebaseapp.com",
  databaseURL: "https://sahyogdatabase-default-rtdb.firebaseio.com",
  projectId: "sahyogdatabase",
  storageBucket: "sahyogdatabase.appspot.com",
  messagingSenderId: "451288368159",
  appId: "1:451288368159:web:2a1075adaf27f50ace012a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;