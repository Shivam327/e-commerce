import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

export const category = {
  Accessory: 'Accessory',
  Book: 'Book',
  Computer: 'Computer',
  Fashion: 'Fashion',
  Electronic: 'Electronic',
  Mobile: 'Mobile',
};

export const getData = (category, setProductsFunc) => {
  const q = query(collection(db, 'product'));
  onSnapshot(q, (querySnapshot) => {
    const allProducts = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
    const filteredData = allProducts.filter((product) => product.data.category === category);
    console.log(filteredData);
    setProductsFunc(filteredData);
  });
};
