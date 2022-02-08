import React, { useEffect, useState } from 'react';
import { category } from '../../utill';
import { getData } from '../../firebase';

import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Access = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    getData(category['Accessory'], setAccessories);
    return () => {
      setAccessories();
    };
  }, []);

  return (
    <div className='container'>
      <Heading>Accessory</Heading>
      {accessories.length === 0 && <h3 className='text-center text-secondary mt-5'>No Product Found</h3>}
      <div className='row'>
        {accessories.map((accessory) => (
          <ItemCard
            id={accessory.id}
            key={accessory.id}
            name={accessory.data.name}
            price={accessory.data.price}
            description={accessory.data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Access;
