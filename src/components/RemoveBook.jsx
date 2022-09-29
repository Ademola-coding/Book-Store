import React from 'react';
import PropTypes from 'prop-types';

// Import Redux useDispatch
import { useDispatch } from 'react-redux';
import { RemoveABook } from '../redux/books/Books';

const RemoveBook = (  { id }  ) => {
  const dispatch = useDispatch();

  // Dispatch a corresponding action (import Action Creator and use it here).
  const deleteBook = (book) => { dispatch(RemoveABook(book)); };

  return ( 
  <button type="button" onClick={() => deleteBook(id)}> Remove </button>
  );
};

RemoveBook.propTypes = { id: PropTypes.string.isRequired };

export default RemoveBook; 