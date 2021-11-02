// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAiXV1vXFqi6Bcm39zLN0dpSYXKC9t5JEw",
    authDomain: "vue-key.firebaseapp.com",
    projectId: "vue-key",
    storageBucket: "vue-key.appspot.com",
    messagingSenderId: "951628084205",
    appId: "1:951628084205:web:e50f87a144613bc1f06de4"
  };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

const firebaseApp = initializeApp(firebaseConfig);
export const db = getStorage(firebaseApp);

