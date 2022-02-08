import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { success } from '../toastify';
import { handleDelete } from '../firebase';
import { addToCart } from '../utill';

const ItemCard = ({ id, price, name, description, isEditable }) => {
  const [open, setOpen] = useState(true);
  const [setname, setName] = useState(name);
  const [setdescription, setDescription] = useState(description);
  const [setprice, setPrice] = useState(price);
  if (isEditable === undefined) {
    isEditable = false;
  }

  const handleChange = async (e) => {
    e.preventDefault();
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
  // const handleClose = () => {
  //   setOpen({ edit: false, view: false });
  // };

  return (
    <div className={isEditable ? 'col-md-12 col-sm-12 my-2' : 'col-md-6 col-sm-12 mt-1'}>
      <div className='row m-1 border border-danger'>
        <div className='col-3 border border-primary d-sm-none d-md-block'>{/* <img src={src} className='card-img-top' alt={name} /> */}</div>
        <div className='col'>
          <div className='card w-100'>
            <div className='card-body justify-content-start  position-relative'>
              <h5 className='card-title'>{name}</h5>
              <p className='card-text'>{description}</p>
              <p className='card-text'>$ {price}</p>
              {isEditable ? (
                <>
                  <button
                    type='button'
                    className='btn btn-secondary ml-1'
                    onClick={() => setOpen(!open)}
                    data-bs-toggle='modal'
                    data-bs-target='#editModal'
                  >
                    Edit
                  </button>
                  <button type='button' className='btn btn-danger ml-1' onClick={() => handleDelete(id)}>
                    Delete
                  </button>
                </>
              ) : (
                <button
                  type='submit'
                  className='btn btn-primary position-absolute bottom-0 end-0 my-1 mx-1'
                  onClick={() => addToCart({ id, name, price, description })}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <>
        <div className='modal fade' id='editModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='Modal'>
                  Update Product
                </h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body text-primary'>
                <form
                  onSubmit={() => {
                    handleChange(id);
                  }}
                >
                  <div className='row g-3 align-items-center m-3'>
                    <div className='col-4'>
                      <label className='col-form-label'>Name</label>
                    </div>
                    <div className='col-8'>
                      <input type='text' value={name} className='form-control' onChange={(e) => setName(e.target.value)} />
                    </div>
                  </div>

                  <div className='row g-3 align-items-center m-3'>
                    <div className='col-4'>
                      <label className='col-form-label'>Description</label>
                      {description}
                    </div>
                    <div className='col-8'>
                      <input type='text' value={description} className='form-control' onChange={(e) => setDescription(e.target.value)} />
                    </div>
                  </div>
                  <div className='row g-3 align-items-center m-3'>
                    <div className='col-4'>
                      <label className='col-form-label'>Price</label>
                    </div>
                    <div className='col-8'>
                      <input type='number' value={price} className='form-control' onChange={(e) => setPrice(e.target.value)} />
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary btn-md btn-block mb-2'>
                    Save changes
                  </button>
                </form>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='editModal'>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemCard;
