import React, { useEffect, useState } from 'react';
import { getData, category } from '../../utill';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Computer = () => {
  const [computers, setComputer] = useState([]);

  useEffect(() => {
    getData(category['Book'], setComputer);
  }, []);

  return (
    <div className='container'>
      <Heading>Computers</Heading>
      <div className='row d-flex'>
        {computers.map((computer) => (
          <ItemCard
            id={computer.id}
            key={computer.id}
            name={computer.data.name}
            price={computer.data.price}
            description={computer.data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Computer;
