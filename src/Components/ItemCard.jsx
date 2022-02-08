import React, { useState } from 'react';
import Modal from './EditModal';
import { success } from '../toastify';

const ItemCard = ({ id, price, name, description, isEditable }) => {
  const [open, setOpen] = useState(false);

  // const handleClose = () => {
  //   setOpen({ edit: false, view: false });
  // };

  return (
    <div className='col-sm-6 my-3'>
      <div className='row m-1 border border-primary'>
        <div className='col-3 border border-danger'>{/* <img src={src} className='card-img-top' alt={name} /> */}</div>
        <div className='col'>
          <div className='card w-100'>
            <div className='card-body justify-content-md-end'>
              <h5 className='card-title'>{name}</h5>
              <p className='card-text'>{description}</p>
              <p className='card-text'>$ {price}</p>
              {isEditable ? (
                <button type='button' className='btn btn-primary ml-1' onClick={() => setOpen(!open)}>
                  Edit
                </button>
              ) : (
                <button type='submit' className='btn btn-primary' onClick={() => success('Cart')}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {open && <Modal id={id} name={name} description={description} isEditable={false} onclose={onclose} />}
    </div>
  );
};

export default ItemCard;
