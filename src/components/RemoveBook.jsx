import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveABook } from '../redux/books/Books';

const RemoveBook = ({ id }) => {
  const dispatch = useDispatch();
  const deleteBook = (book) => { dispatch(RemoveABook(book)); };

  return ( 
  <button type="button" onClick={() => deleteBook(id)}> Remove </button>
  );
};

RemoveBook.propTypes = { id: PropTypes.string.isRequired };

export default RemoveBook; 