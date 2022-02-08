import React, { useEffect, useState } from 'react';
import { category } from '../../utill';
import { getData } from '../../firebase';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Fashion = () => {
  const [fashion, setFashion] = useState([]);

  useEffect(() => {
    getData(category['Fashion'], setFashion);
    return () => {
      setFashion([]);
    };
  }, []);

  return (
    <div className='container'>
      <Heading>Fashion</Heading>
      {fashion.length === 0 && <h3 className='text-center text-secondary mt-5'>No Product Found</h3>}
      <div className='row d-flex'>
        {fashion.map((fashion) => (
          <ItemCard id={fashion.id} key={fashion.id} name={fashion.data.name} price={fashion.data.price} description={fashion.data.description} />
        ))}
      </div>
    </div>
  );
};

export default Fashion;
