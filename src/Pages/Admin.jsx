import React, { useContext, useState } from 'react';
import AuthContext from '../store/store';
const Admin = () => {
  // const context = useContext(AuthContext)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log(
    '----------------------------------------------------------------------',
    isLoggedIn
  );

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className='col-3'></div>
          <div className='col'>
            {' '}
            <form>
              <div class='mb-3'>
                <label for='exampleInputEmail1' class='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
                <div id='emailHelp' class='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class='mb-3'>
                <label for='exampleInputPassword1' class='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  class='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div class='mb-3 form-check'>
                <input
                  type='checkbox'
                  class='form-check-input'
                  id='exampleCheck1'
                />
                <label class='form-check-label' for='exampleCheck1'>
                  Check me out
                </label>
              </div>
              <button
                type='submit'
                class='btn btn-primary'
                onClick={() => setIsLoggedIn(!isLoggedIn)}
              >
                Submit
              </button>
            </form>
          </div>
          <div className='col-3'></div>
        </>
      ) : (
        'Nope'
      )}
    </>
  );
};

export default Admin;
