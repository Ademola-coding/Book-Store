import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookLists = () => {
  const books = useSelector((state) => state.booksReducer);
  const mapBooks = books.map((book) => (
    <Book key={book.id} id={book.id} title={book.title} author={book.author} />
  ));

  return (
    <div className="book-lists">
      {mapBooks}
      <Form />
    </div>
  );
};

export default BookLists;
