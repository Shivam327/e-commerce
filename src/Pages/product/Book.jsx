import React, { useEffect, useState } from 'react';
import { getData, category } from '../../utill';

import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';

const Book = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    getData(category['Book'], setBook);
  }, []);

  // const BookData = book.filter((book) => book.category === 'book');
  // setBook(BookData);
  return (
    <div className='container'>
      <Heading>Book</Heading>
      <div className='row d-flex'>
        {book.map((book) => (
          <ItemCard id={book.id} key={book.id} name={book.data.name} price={book.data.price} description={book.data.description} />
        ))}
      </div>
    </div>
  );
};

export default Book;
