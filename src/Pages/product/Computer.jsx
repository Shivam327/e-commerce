import React, { useEffect, useState } from 'react';
import { category } from '../../utill';
import { getData } from '../../firebase';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Computer = () => {
  const [computers, setComputer] = useState([]);

  useEffect(() => {
    getData(category['Book'], setComputer);
    return () => {
      setComputer([]);
    };
  }, []);

  return (
    <div className='container'>
      <Heading>Computers</Heading>
      {computers.length === 0 && <h3 className='text-center text-secondary mt-5'>No Product Found</h3>}
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
