import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { warn } from './toastify';

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

export const getData = (category, setProductsFunc) => {
  const q = query(collection(db, 'product'));
  onSnapshot(q, (querySnapshot) => {
    const allProducts = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
    const filteredData = allProducts.filter((product) => product.data.category === category);
    setProductsFunc(filteredData);
  });
};

export const handleDelete = async (id) => {
  const taskDocRef = doc(db, 'product', id);
  try {
    warn();
    deleteDoc(taskDocRef);
  } catch (err) {
    alert(err);
  }
};

export { db };
