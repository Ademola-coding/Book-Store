const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// make sure that you keep state immutable in reducers!
// change the default state in your books reducer from
// an empty array to an array with a few books
// initialsState = [];
const books = [
  {
    id: 1,
    title: 'React with Redux',
    author: 'Stephen Grider',
  },
  {
    id: 2,
    title: 'Power',
    author: 'James st patrick',
  },
  {
    id: 3,
    title: 'Modern Javascript',
    author: 'steeve clot',
  }
]

export const AddBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const RemoveABook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const bookReducer = (state = books, action) => {
  
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;