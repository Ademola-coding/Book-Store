import React from 'react';
import BookList from '../../components/List/BookList';
import Form from '../../components/form/Form';

// write your actions and reducers here

// Define action types for adding and removing a book.

// Set the initial state to be an empty array of books.

// Export Action Creators for your actions.

// Write your reducer and export it as default
     // Define state changes for the actions that you created.
     // In case of unknown action - return the current state.

export default function Books() {
  return (
    <>
      <BookList />  
      <Form />
    </>
  );
}