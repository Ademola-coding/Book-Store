/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit/dist';
import ReducerBooks from './books/Books';
import ReducerCategories from './categories/Categories';

const Store = configureStore({
  reducer: {
    books: ReducerBooks,
    categories: ReducerCategories,
  },
});

export default Store;
