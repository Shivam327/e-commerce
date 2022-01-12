import React from 'react';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';
import { items } from '../../data';

const Mobiles = items.mobile;
const Mobile = () => {
  return (
    <div className='container'>
      <Heading>Mobiles</Heading>
      <div className='row d-flex'>
        {Mobiles.map((mobile) => (
          <ItemCard
            img={mobile.img}
            name={mobile.name}
            desc={mobile.descrption}
            price={mobile.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Mobile;
