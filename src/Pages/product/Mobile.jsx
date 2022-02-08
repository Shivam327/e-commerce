import React, { useEffect, useState } from 'react';

import { getData, category } from '../../utill';

import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Mobile = () => {
  const [mobile, setMobile] = useState([]);

  useEffect(() => {
    getData(category['Accessory'], setMobile);
  }, []);

  return (
    <div className='container'>
      <Heading>Mobiles</Heading>
      <div className='row d-flex'>
        {mobile.map((mobile) => (
          <ItemCard id={mobile.id} key={mobile.id} name={mobile.data.name} price={mobile.data.price} description={mobile.data.description} />
        ))}
      </div>
    </div>
  );
};

export default Mobile;
