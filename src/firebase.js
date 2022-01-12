import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDUBBhNzMjTUspcNqNaYlFN4BgTQOLsK_I',
  authDomain: 'e-commerce-4b3f4.firebaseapp.com',
  databaseURL: 'https://e-commerce-4b3f4-default-rtdb.firebaseio.com',
  projectId: 'e-commerce-4b3f4',
  storageBucket: 'e-commerce-4b3f4.appspot.com',
  messagingSenderId: '706683856017',
  appId: '1:706683856017:web:f96aaf7185f705daa30b30',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
