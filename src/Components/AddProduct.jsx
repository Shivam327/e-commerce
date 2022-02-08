import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

import { productAdded, productError } from '../toastify';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Select');

  const categories = ['Select', 'Accessory', 'Book', 'Computer', 'Fashion', 'Electronic', 'Mobile'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category === 'Select' || name.length === 0 || description.length === 0 || price.length === 0 || category.length === 0) {
      productError();
    } else {
      try {
        await addDoc(collection(db, 'product'), {
          name: name,
          description: description,
          price: price,
          category: category,
          id: Timestamp.now(),
        });
        successMsg();

        // onClose();
      } catch (err) {
        alert(err);
      }
    }
  };

  function successMsg() {
    setName('');
    setDescription('');
    setPrice('');
    setCategory('');
    productAdded();
  }
  return (
    <>
      <div className='border  border-3 border-primary  my-5 text-primary'>
        <form onSubmit={handleSubmit}>
          <div className='row g-3 align-items-center m-3 position-relative'>
            <div className='col-auto'>
              <label className='col-form-label'>Category</label>
            </div>
            <div className='col-auto "d-flex justify-content-evenly"'>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className='form-select form-select-sm col-auto'
                aria-label='.form-select-sm example'
              >
                {categories.map((category) => (
                  <option> {category} </option>
                ))}
              </select>
            </div>
          </div>
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
            Submit
          </button>
          {/* <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#exampleModalCenter'>
            Launch demo modal
          </button> */}
        </form>
      </div>
    </>
  );
};

export default AddProduct;
