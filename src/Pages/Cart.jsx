import React from 'react';

import Heading from '../Components/Heading';
import ScrollContainer from '../Components/ScrollContainer';

export const cartItems = [];
console.log(cartItems);

const Cart = () => {
  return (
    <>
      <Heading>Cart</Heading>
      {/* <div className='col-12 col-md-8'>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div> {item.description}</div>
            <div> {item.name}</div>
            <div> {item.price}</div>
          </div>
        ))}
      </div> */}
      <div className='col-12 col-md-4'>{cartItems.length}</div>
    </>
  );
};

export default Cart;
