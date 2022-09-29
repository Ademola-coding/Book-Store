import React from 'react';

// Use useSelector to consume the state.
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookLists = () => {
  const books = useSelector( (state) => state.booksReducer);
  const mappedBooks = books.map((book) => ( 
                                            < Book 
                                                 key={book.id}
                                                 id={book.id} 
                                                 title={book.title}
                                                 author={book.author}
                                            />
                                          ));

  return (
    <div className="generatedBookLists"> {mappedBooks}  <Form/></div>
  );
};

export default BookLists;
