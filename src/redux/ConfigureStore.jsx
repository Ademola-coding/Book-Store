// Importing the necessary methods from Redux Toolkit.
import { createStore, combineReducers, applyMiddleware } from 'redux';

// logger gotten from this package  ( npm i --save redux-logger )
import logger from 'redux-logger';
import booksReducer from './books/Books';
import bookStatusReducer from './categories/Categories';

// Combine both reducers into a root reducer by using configureStore function.
const reducer = combineReducers({booksReducer,  bookStatusReducer, });

// Configure the Redux Store (/src/redux/configureStore.js):
const Store = createStore(reducer, applyMiddleware(logger));

export default Store;
