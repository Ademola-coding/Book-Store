/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_ARR_BOOK, ADD_BOOK, REMOVE_BOOK } from './books'

const UNIQ_ID = 'EbbXbXettf993NXxRytG';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${UNIQ_ID}/books/`;

export const GetBooks = createAsyncThunk(ADD_ARR_BOOK, async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  const newArray = Object.keys(data).map((id) => {
    const obj = data[id][0];
    obj.id = id;
    return obj;
  });

  return newArray;
});

export const AddBooksApi = createAsyncThunk(ADD_BOOK, async (newBook) => newBook);

export const RemoveBooksApi = createAsyncThunk(REMOVE_BOOK, async (id) => id);
