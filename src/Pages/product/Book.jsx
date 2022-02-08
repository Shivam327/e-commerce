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
          <ItemCard key={book.id} id={book.id} img={book.img} name={book.name} desc={book.descrption} price={book.price} />
        ))}
      </div>
    </div>
  );
};

export default Book;
