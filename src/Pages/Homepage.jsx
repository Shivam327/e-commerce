import React from 'react';

import { Link } from 'react-router-dom';
import MenuCard from '../Components/MenuCard';
import Heading from '../Components/Heading';
import { categories } from '../data';

const Homepage = () => {
  return (
    <>
      <div className='container' style={{ marginTop: '1.5rem' }}>
        <Heading>Category</Heading>
        <div className='row align-middle' style={{ margin: '2.5rem' }}>
          {categories.map((category) => (
            <Link key={category.name} className='col-sm-12 col-md-4' to={category.link}>
              <MenuCard>{category.name}</MenuCard>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
