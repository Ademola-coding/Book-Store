import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBooksApi } from './../redux/books/ApiBook';

const BookItem = (props) => {
  const { id, title, author, category, } = props;
  const dispatch = useDispatch();

  return (
    <li id={id} className="eachBook">
        <div className='mainInfo'> 
        <div className='data'>
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="author">{author}</p>
          </div> 

        <div className="buttonsContainer">
            <button className="btn1" type="button">Comments</button>
            <p >|</p>
            <button className="btn1 adjust" type="button" 
            onClick={() => dispatch(removeBooksApi(id))}>Remove</button>
            <p>|</p>
            <button className="btn1 adjust" type="button">Edit</button>
        </div>
      </div>


      <div className='info'> 
        <div className='percentageData'>
        <svg height="100" width="100">
           <circle cx="50" cy="50"  r="30"/>
                 
          </svg>
          <span className='align'>
            <p>64%</p>
            <p>Completed</p>
          </span>
        </div>

        <div className='divider'>
         <div className='dot'>.</div>
        </div>

        <div className="CompletedNChapter"> 
          <h3 className='currChap'> Current Chapter</h3>
          <h4 className='chapter'>chapter 17</h4>
          <button type='button' className='update'>Update Completed</button>
        </div>
        
       </div>
    </li>
  );
};

export default BookItem;

BookItem.defaultProps = { id: '0', title: '', author: '', category: '', };

BookItem.propTypes = {
  id: PropTypes.string, title: PropTypes.string, author: PropTypes.string,
  category: PropTypes.string,
};
