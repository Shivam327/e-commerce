import React from 'react';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';
import { items } from '../../data';

const Fashions = items.fashion;
const Fashion = () => {
  return (
    <div className='container'>
      <Heading>Fashion</Heading>
      <div className='row d-flex'>
        {Fashions.map((fashion) => (
          <ItemCard
            img={fashion.img}
            name={fashion.name}
            desc={fashion.descrption}
            price={fashion.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Fashion;
