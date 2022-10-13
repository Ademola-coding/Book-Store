import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import BookLists from './components/BookList';
import Categories from './components/CategoriesPage';
import Store from './redux/ConfigureStore';

const App = () => (
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
