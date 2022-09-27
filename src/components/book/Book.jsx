import React from 'react';
import './book.scss'

export default function book({ title, author }) {
  return (
    <div className="book-container">
      <h5 className="category">Category</h5>
      <div className='eachBook'>
         <h3 className="title">{title}</h3>
         <h4 className="author">{author}</h4>
         <button type="button" className="remove-btn">Remove</button>
      </div>
    </div> 
  );
}
