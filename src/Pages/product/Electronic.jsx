import React from 'react';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';
import { items } from '../../data';

const Electronics = items.electronic;
const Electronic = () => {
  return (
    <div className='container '>
      <Heading>Electronics</Heading>
      <div className='row d-flex'>
        {Electronics.map((electronic) => (
          <ItemCard
            img={electronic.img}
            name={electronic.name}
            desc={electronic.descrption}
            price={electronic.price}
            id={electronic.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Electronic;
