import React, { useContext } from 'react';
import AuthContext from '../store/store';

const ItemCard = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className='col-sm-6 my-3'>
      <div className='row m-1 border border-primary'>
        <div className='col-3 border border-danger'>
          <img src={props.src} class='card-img-top' alt={props.name} />
        </div>
        <div className='col'>
          <div class='card w-100'>
            <div class='card-body justify-content-md-end'>
              <h5 class='card-title'>{props.name}</h5>
              <p class='card-text'>{props.desc}</p>
              <button
                type='submit'
                class='btn btn-primary'
                onClick={(props) => {
                  alert(props.id);
                }}
              >
                Add to Cart
              </button>
              {isLoggedIn && (
                <button type='button' class='btn btn-primary ml-1'>
                  {' '}
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
