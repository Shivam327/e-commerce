import React from 'react';
import { Link } from 'react-router-dom';

const ProductNav = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#productnavbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='true'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse  justify-content-around align-items-center navbar-collapse'
            id='productnavbarNavAltMarkup'
          >
            <div className='navbar-nav ms-5 '>
              <Link className='nav-link ' to='/accsess'>
                Accessory
              </Link>
            </div>
            <div className='navbar-nav ms-5'>
              <Link className='nav-link' to='/book'>
                Book
              </Link>
            </div>
            <div className='navbar-nav ms-5  '>
              <Link className='nav-link' to='/computer'>
                Computer
              </Link>
            </div>
            <div className='navbar-nav ms-5  '>
              <Link className='nav-link' to='/fashion'>
                Fashion
              </Link>
            </div>
            <div className='navbar-nav ms-5  '>
              <Link className='nav-link' to='/electronic'>
                Electronic
              </Link>
            </div>

            <div className='navbar-nav ms-5  '>
              <Link className='nav-link' to='/mobile'>
                Mobile
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ProductNav;
