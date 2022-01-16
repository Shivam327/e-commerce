import React, { useContext, useState } from 'react';
import AuthContext from '../store/store';

import LoginForm from '../Components/LoginForm';
import AddProduct from '../Components/AddProduct';
const Admin = () => {
  const { isLoggedIn, onLogin, onLogout } = useContext(AuthContext);
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('Admin123');

  const login = (e) => {
    e.preventDefault();
    if (username.length === 0 && password.length === 0) {
      alert('Please Enter Username & Password');
    } else {
      onLogin(username, password);
    }
  };
  return (
    <>
      {!isLoggedIn ? (
        <LoginForm
          login={login}
          username={username}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
        />
      ) : (
        <AddProduct />
      )}

      {isLoggedIn && (
        <button
          type='submit'
          className='btn btn-primary'
          onClick={() => onLogout()}
        >
          LogOut
        </button>
      )}
    </>
  );
};

export default Admin;
