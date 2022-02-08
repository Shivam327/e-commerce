import React, { useEffect, useState } from 'react';
import { getData, category } from '../../utill';

import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Access = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    getData(category['Accessory'], setAccessories);
  }, []);

  return (
    <div className='container'>
      <Heading>Accessory</Heading>
      <div className='row d-flex'>
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
