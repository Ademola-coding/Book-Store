import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { AddBooksApi } from '../redux/books/ApiBook';

const FormAdd = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('DEFAULT');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title === '' || author === '' || category === '' || category === 'DEFAULT') return;

    const newBook = { id: nanoid(), title, author, category, };

    dispatch(addBooksApi(newBook));
    setTitle('');
    setAuthor('');
    setCategory('DEFAULT');
  };

  return (
    <form>

      <div className='liny'></div>

      <h2>ADD NEW BOOK</h2>

      <div className='inputs'>
        <input id="title" type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input id="author" type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option disabled value="DEFAULT">select an option</option>
          <option value="Fiction">Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>
        <button type="button" onClick={handleAdd}>ADD BOOK</button>
      </div>
      
    </form>
  );
};

export default FormAdd;
