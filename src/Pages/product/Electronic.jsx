import React, { useEffect, useState } from 'react';

import { category } from '../../utill';
import { getData } from '../../firebase';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Electronic = () => {
  const [electronic, setElectronic] = useState([]);

  useEffect(() => {
    getData(category['Accessory'], setElectronic);
    return () => {
      setElectronic([]);
    };
  }, []);

  return (
    <div className='container '>
      <Heading>Electronics</Heading>
      {electronic.length === 0 && <h3 className='text-center text-secondary mt-5'>No Product Found</h3>}
      <div className='row d-flex'>
        {electronic.map((electronic) => (
          <ItemCard
            id={electronic.id}
            key={electronic.id}
            name={electronic.data.name}
            price={electronic.data.price}
            description={electronic.data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Electronic;
