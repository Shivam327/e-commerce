import React, { useContext } from 'react';
import AuthContext from '../../store/store';

import { Link } from 'react-router-dom';

const MainNavbar = () => {
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            E-Commerce
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse justify-content-end navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav m-lg-2'>
              <Link className='nav-link' aria-current='page' to='/admin'>
                Admin Login
              </Link>
              {isLoggedIn ? (
                <button type='submit' className='btn btn-danger' onClick={() => onLogout()} style={{ marginLeft: '1.5rem' }}>
                  LogOut
                </button>
              ) : (
                <>
                  <Link className='nav-link' aria-current='page' to='/cart'>
                    <i className='bi bi-cart-plus'>Cart</i>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
