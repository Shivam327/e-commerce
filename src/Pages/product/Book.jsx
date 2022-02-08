import React, { useEffect, useState } from 'react';
import { category } from '../../utill';
import { getData } from '../../firebase';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Book = () => {
  const [books, setBook] = useState([]);
  useEffect(() => {
    getData(category['Book'], setBook);
    return () => {
      setBook([]);
    };
  }, []);

  return (
    <div className='container'>
      <Heading>Book</Heading>
      {books.length === 0 && <h3 className='text-center text-secondary mt-5'>No Product Found</h3>}
      <div className='row'>
        {books.map((book) => (
          <ItemCard id={book.id} key={book.id} name={book.data.name} price={book.data.price} description={book.data.description} />
        ))}
      </div>
    </div>
  );
};

export default Book;
