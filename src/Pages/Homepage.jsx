import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import MenuCard from '../Components/MenuCard';
import Carousel from '../Components/Carousel';
import { categories } from '../data';
import AuthContext from '../store/store';
const Homepage = () => {
  const context = useContext(AuthContext);
  console.log(context);
  return (
    <>
      <Carousel />
      <div className='container'>
        {context.isLoggedIn ? 'name' : 'Not Name'}
        <div className='row d-flex' style={{ margin: '1.5rem' }}>
          {categories.map((category) => (
            <Link className='col-sm-4 col' to={category.link}>
              <MenuCard>{category.name}</MenuCard>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
