// Define action types for adding and removing a book.
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Set the initial state to be an empty array of books.
const initialsState = [];

// Export Action Creators for your actions.
export const AddBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const RemoveABook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// Write your reducer and export it as default.
const bookReducer = (state = initialsState, action) => {
  
  // Define state changes for the actions that you created.
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      // In case of unknown action - return the current state.
      return state;
  }
};

export default bookReducer;