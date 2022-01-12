import React from 'react';

const Heading = (props) => {
  return (
    <div className='row border-bottom border-primary mt-1'>
      <h1 className='text-center text-info mb-3'>{props.children}</h1>
    </div>
  );
};

export default Heading;
