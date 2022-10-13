import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatus } from '../redux/categories/Categories'

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{status}</p>
      <button type="button" className="btn2"
       onClick={() => dispatch(CheckStatus())}>Check Status</button>
    </div>
  );
};

export default Categories;
