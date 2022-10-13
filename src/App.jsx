import { Routes, Route } from 'react-router-dom';

// Import Redux Provider
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import BookLists from './components/BookList';
import Categories from './components/CategoriesPage';

// Import Redux Store
import Store from './redux/ConfigureStore';

const App = () => (
  // Connect your app to the Redux store
  <Provider store={Store}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookLists />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Provider>
);

export default App;
