import React from 'react';
import Banner1 from '../Images/car-1.jpg';
import Banner2 from '../Images/car-2.jpg';
import Banner3 from '../Images/car-3.jpg';
const Carousel = () => {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to='0'
          className='active'
        ></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={Banner1} className='d-block w-100 img-fluid' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={Banner2} className='d-block w-100 img-fluid' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={Banner3} className='d-block w-100 img-fluid' alt='...' />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-target='#carouselExampleIndicators'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-target='#carouselExampleIndicators'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </button>
    </div>
  );
};

export default Carousel;
