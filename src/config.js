
import {initializeApp}  from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAAs0_uQgA91ELQmhoNnslFQLFtJI9hEVc",
  authDomain: "sahyogportal-mp2.firebaseapp.com",
  databaseURL: "https://sahyogportal-mp2-default-rtdb.firebaseio.com",
  projectId: "sahyogportal-mp2",
  storageBucket: "sahyogportal-mp2.appspot.com",
  messagingSenderId: "110600262630",
  appId: "1:110600262630:web:36c7dbab4c21088f167c27"
  };
  // Initialize Firebase
    
   export const app = initializeApp(firebaseConfig);
   export const auth =  getAuth(app);

   const database = getDatabase();
  