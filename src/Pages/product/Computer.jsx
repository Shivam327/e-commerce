import React from 'react';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';
import { items } from '../../data';

const Computers = items.computer;
const Computer = () => {
  return (
    <div className='container'>
      <Heading>Computers</Heading>
      <div className='row d-flex'>
        {Computers.map((compouter) => (
          <ItemCard
            img={compouter.img}
            name={compouter.name}
            desc={compouter.descrption}
            price={compouter.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Computer;
