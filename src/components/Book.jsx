/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';


export default function book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div className="book-info">
        <h5 className="category"> {book.category} </h5>
        <h3 className="title">{book.title}</h3>
        <h4 className="author">{book.author}</h4>
        <ul className="actions">
          <li className='listBtns'>  <button className="book-button" type="button">Comments</button> </li>
          <li className='listBtns'>  <button onClick={() => {  dispatch(removeBook(book.item_id)) }}
           type="button" className="book-button remove-button" > Remove </button>
          </li>
          <li className='listBtns'> <button className="book-button" type="button">Edit</button>  </li>
        </ul>
      </div>
      <div className="progress">
        <div className="circle" />
        <div className="progress-info">
          <p className="completed-number  prog">35%</p>
          <p className="completed  prog" >Completed</p>
        </div>
      </div>
      <div className="chapter-info">
        <h3 className='chap'>Numbers of Chapters: 35</h3>
        <button className="update-button chap" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}
