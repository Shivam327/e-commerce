import React, { useEffect, useState } from 'react';

import { getData, category } from '../../utill';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Electronic = () => {
  const [electronic, setElectronic] = useState([]);

  useEffect(() => {
    getData(category['Accessory'], setElectronic);
  }, []);

  return (
    <div className='container '>
      <Heading>Electronics</Heading>
      <div className='row d-flex'>
        {electronic.map((electronic) => (
          <ItemCard
            id={electronic.id}
            key={electronic.id}
            name={electronic.data.name}
            desc={electronic.data.descrption}
            price={electronic.data.price}
            description={electronic.data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Electronic;
