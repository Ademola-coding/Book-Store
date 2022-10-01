 /* eslint-disable */
import { configureStore } from '@reduxjs/toolkit/dist';
import reducerBooks from './books/Books';
import reducerCategories from './categories/Categories';

const store = configureStore({
  reducer: {
    books: reducerBooks,
    categories: reducerCategories,
  },
});

export default store;
