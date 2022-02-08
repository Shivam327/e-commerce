import React, { useEffect, useState } from 'react';
import { getData, category } from '../../utill';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Fashion = () => {
  const [fashion, setFashion] = useState([]);

  useEffect(() => {
    getData(category['Fashion'], setFashion);
  }, []);

  return (
    <div className='container'>
      <Heading>Fashion</Heading>
      <div className='row d-flex'>
        {fashion.map((fashion) => (
          <ItemCard id={fashion.id} key={fashion.id} name={fashion.data.name} price={fashion.data.price} description={fashion.data.description} />
        ))}
      </div>
    </div>
  );
};

export default Fashion;
