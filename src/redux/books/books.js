const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'React with Redux',
    author: 'Stephen Grider',
    id: 1,
  },
  {
    title: 'Power',
    author: 'James st Patrick',
    id: 2,
  },
  {
    title: 'Modern JavaScript',
    author: 'Steeve Clot',
    id: 3,
  },
];

// Fetch book list from Bookstore API on Books page load.
// Add an Action Creator, that returns a function.
function getBooks() {
  return async (dispatch) => {
    // Fetch list of books.
    const response = await
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EbbXbXettf993NXxRytG/books');
    const data = await response.json();
    const books = [];

    // Refactor your add book and remove book features to persist your changes in the server.
    Object.keys(data).forEach((e) => { books.push({ ...data[e][0], item_id: e }); });

    // Dispatch another action (add an action type)
    // that will pass API response to reducer and updates the state.
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  };
}

const addBook = (book) => async (dispatch) => {
  await fetch(`${API_URL}/apps/EbbXbXettf993NXxRytG/books/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

  dispatch({ type: ADD_BOOK, payload: book });
};

const removeBook = (id) => async (dispatch) => {
  await fetch(`${API_URL}/apps/EbbXbXettf993NXxRytG/books/${id}`, { method: 'DELETE' });
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export { addBook, removeBook, getBooks };

// Change your existing Action Creators, so they return functions.
export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
}
