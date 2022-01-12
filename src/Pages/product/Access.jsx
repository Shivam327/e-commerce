import React from 'react';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';
import { items } from '../../data';

const Accessories = items.accessory;

const Access = () => {
  return (
    <div className='container'>
      <Heading>Accessory</Heading>
      <div className='row d-flex'>
        {Accessories.map((accessory) => (
          <ItemCard
            id={accessory.id}
            img={accessory.img}
            name={accessory.name}
            desc={accessory.descrption}
            price={accessory.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Access;
