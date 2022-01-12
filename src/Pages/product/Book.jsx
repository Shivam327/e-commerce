import React from 'react';
import Heading from '../../Components/Heading';
import ItemCard from '../../Components/ItemCard';
import { items } from '../../data';

const Books = items.book;

console.log(Books);
const Book = () => {
  return (
    <div className='container'>
      <Heading>Book</Heading>
      <div className='row d-flex'>
        {Books.map((book) => (
          <ItemCard
            key={book.id}
            id={book.id}
            img={book.img}
            name={book.name}
            desc={book.descrption}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Book;
