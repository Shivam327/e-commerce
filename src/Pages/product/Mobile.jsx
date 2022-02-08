import React, { useEffect, useState } from 'react';

import { category } from '../../utill';
import { getData } from '../../firebase';

import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Mobile = () => {
  const [mobile, setMobile] = useState([]);

  useEffect(() => {
    getData(category['Accessory'], setMobile);
    return () => {
      setMobile([]);
    };
  }, []);

  return (
    <div className='container'>
      <Heading>Mobiles</Heading>
      {mobile.length === 0 && <h3 className='text-center text-secondary mt-5'>No Product Found</h3>}
      <div className='row d-flex'>
        {mobile.map((mobile) => (
          <ItemCard id={mobile.id} key={mobile.id} name={mobile.data.name} price={mobile.data.price} description={mobile.data.description} />
        ))}
      </div>
    </div>
  );
};

export default Mobile;
