import React, { useState } from 'react';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [xx, setxx] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Accessory',
    'Book',
    'Computer',
    'Fashion',
    'Electronic',
    'Mobile',
  ];
  const addProduct = (e) => {
    e.preventDefault();
    alert(description + '  0  ' + xx + ' 0  ' + name + ' 0  ' + category);
  };
  return (
    <>
      <div className='col-md'></div>

      <div className='col-md-4  offset-md-4 border  border-3 border-primary  my-5 text-primary'>
        <form onSubmit={(e) => addProduct(e)}>
          <div className='row g-3 align-items-center m-3'>
            <div className='col-auto'>
              <label className='col-form-label'>Category</label>
            </div>
            <div className='col-auto'>
              <select
                onChange={(e) => setCategory(e.target.value)}
                class='form-select form-select-sm col-auto'
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
              <label className='col-form-label'>Username</label>
            </div>
            <div className='col-auto'>
              <input
                type='text'
                value={name}
                className='form-control'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className='row g-3 align-items-center m-3'>
            <div className='col-auto'>
              <label className='col-form-label'>Description</label>
            </div>
            <div className='col-auto'>
              <input
                type='text'
                value={description}
                className='form-control'
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className='row g-3 align-items-center m-3'>
            <div className='col-auto'>
              <label className='col-form-label'>xx</label>
            </div>
            <div className='col-auto'>
              <input
                type='text'
                value={xx}
                className='form-control'
                onChange={(e) => setxx(e.target.value)}
              />
            </div>
          </div>
          <button type='submit' className='btn btn-primary m-3 offset-5'>
            Submit
          </button>
        </form>
      </div>
      <div className='col-md'></div>
    </>
  );
};

export default AddProduct;
