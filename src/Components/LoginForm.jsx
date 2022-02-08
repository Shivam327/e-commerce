import React from 'react';

const LoginForm = ({ login, username, password, setPassword, setUsername }) => {
  return (
    <>
      <div className='col-md-4  offset-md-4 border  border-3 border-primary  my-5 text-primary'>
        <form onSubmit={(e) => login(e)}>
          <div className='row g-3 align-items-center m-3'>
            <div className='col-auto'>
              <label className='col-form-label'>Username</label>
            </div>
            <div className='col-auto'>
              <input type='text' value={username} className='form-control' onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>

          <div className='row g-3 align-items-center m-3'>
            <div className='col-auto'>
              <label className='col-form-label'>Password</label>
            </div>
            <div className='col-auto'>
              <input type='password' value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <button type='submit' className='btn btn-primary m-3 offset-5' onClick={login}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
