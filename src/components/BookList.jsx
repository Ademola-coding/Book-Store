import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/books';

export default function BookList() {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  // Dispatch an action (action type that existed before refactor) that will updates the state accordingly.
  useEffect(() => { dispatch(getBooks()) }, [dispatch]);

  return (
    <div className="list-container">

      <ul className="book-list">
        {books.map((book) => ( <Book key={book.item_id}  book={book} /> ))}
      </ul>

    </div>
  );
}
