import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../store/store';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import ScrollContainer from '../Components/ScrollContainer';
import LoginForm from '../Components/LoginForm';
import Heading from '../Components/Heading';
import AddProduct from '../Components/AddProduct';

const Admin = () => {
  const { isLoggedIn, onLogin } = useContext(AuthContext);
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('Admin123');

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, 'product'));
    onSnapshot(q, (querySnapshot) => {
      const allProducts = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
      setProducts(allProducts);
    });

    return () => {
      setProducts({});
    };
  }, []);

  const login = (e) => {
    e.preventDefault();
    if (username.length === 0 && password.length === 0) {
      alert('Please Enter Username & Password');
    } else {
      onLogin(username, password);
    }
  };
  return (
    <div className='container-sm'>
      {!isLoggedIn ? <Heading>Admin Login</Heading> : <h1 className='text-center text-info'>Add Product</h1>}
      {!isLoggedIn ? (
        <LoginForm login={login} username={username} password={password} setPassword={setPassword} setUsername={setUsername} />
      ) : (
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-4'>
            <AddProduct />
          </div>
          <div className='col-sm-12 col-md-12 col-lg-8'>
            <ScrollContainer products={products} isEditable={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
