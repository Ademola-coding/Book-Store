import React from 'react';
import './BookList.scss';
import Book from '../book/Book';

export default function BookList() {
  const books = [
    {
      title: 'The fall of the best',
      author: 'ademola rite',
    },
    {
      title: 'The harder they fall',
      author: 'wooooo know',
    },
  ];

  return ( 
    <div className="list-container">
      <ul className="book-list">
        {
        books.map((book) => (
           <Book
            title={book.title} key={book.id}
            author={book.author} book={book} 
            />
        ))
        }
      </ul>
    </div>
  );
}
