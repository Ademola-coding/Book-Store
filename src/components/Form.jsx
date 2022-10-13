import React, { useState } from 'react';

// select gotten from this package ( npm i react-select )
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';

// Import Redux useDispatch
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/books/Books';

 export const categories = [
  { value: '1', label: 'Action' },
  { value: '2', label: 'Science' },
  { value: '3', label: 'Economy' },
  { value: '4', label: 'Fiction' },
];

const Form = () => {
  const dispatch = useDispatch();

  // Set the data inputs in the local React state (set title and author)
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Takes the inputs from the state and
    //  generate a unique id and add them to an object.
    const newBook = { id: uuidv4(), title : title, author : author, };

    // dispatch a corresponding action (import Action Creator and use it here).
    dispatch(AddBook(newBook));

    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>ADD NEW BOOK</h1>
      <div className="form-container">
        <input
          type="text" className="input-title"
          id="bookTitle" placeholder="Book Title"
          value={title} onChange={handleTitleChange}
          name="title" required
        />
        <input
          type="text" className="input-title"
          id="bookAuthor" placeholder="Book Author"
          value={author}  name="author"
          onChange={handleAuthorChange}  required
        />
        <Select options={categories} className="select" />
        <input type="submit" value="ADD BOOK" className="add-book" />
      </div>
    </form>
  );
};

export default Form;