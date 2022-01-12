/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
const MainNavbar = () => {
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div class='container'>
          <Link class='navbar-brand' to='/'>
            E-Commerce
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div
            class='collapse justify-content-end navbar-collapse'
            id='navbarNavAltMarkup'
          >
            <div class='navbar-nav m-lg-2'>
              <Link class='nav-link' aria-current='page' to='/admin'>
                Admin Login
              </Link>
              <Link class='nav-link' aria-current='page' to='/cart'>
                <i class='bi bi-cart-plus'>Cart</i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
