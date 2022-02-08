import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Modal = ({ name, description, price, id }) => {
  const [setname, setName] = useState(name);
  const [setdescription, setDescription] = useState(description);
  const [setprice, setPrice] = useState(price);

  const handleChange = async () => {
    const ProductDocRef = doc(db, 'product', id);
    try {
      await updateDoc(ProductDocRef, {
        name: setname,
        description: setdescription,
        price: setprice,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div className='modal fade' id='exampleModalCenter' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='Modal'>
                Edit Details
              </h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleChange}>
                <div className='row g-3 align-items-center m-3'>
                  <div className='col-auto'>
                    <label className='col-form-label'>Name</label>
                  </div>
                  <div className='col-auto'>
                    <input type='text' value={name} className='form-control' onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>

                <div className='row g-3 align-items-center m-3'>
                  <div className='col-auto'>
                    <label className='col-form-label'>Description</label>
                  </div>
                  <div className='col-auto'>
                    <input type='text' value={description} className='form-control' onChange={(e) => setDescription(e.target.value)} />
                  </div>
                </div>
                <div className='row g-3 align-items-center m-3'>
                  <div className='col-auto'>
                    <label className='col-form-label'>Price</label>
                  </div>
                  <div className='col-auto'>
                    <input type='number' value={price} className='form-control' onChange={(e) => setPrice(e.target.value)} />
                  </div>
                </div>
                <button type='submit' className='btn btn-primary m-3 offset-5'>
                  Save changes
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
