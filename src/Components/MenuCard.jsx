import React from 'react';

const MenuCard = (props) => {
  return <button className='w-100 my-2 p-5 btn-primary '>{props.children}</button>;
};

export default MenuCard;
