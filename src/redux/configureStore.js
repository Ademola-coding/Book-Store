/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit/dist';
import ReducerBooks from './books/books'
import ReducerCategories from './categories/categories'

const Store = configureStore({
  reducer: {
    books: ReducerBooks,
    categories: ReducerCategories,
  },
});

export default Store;
