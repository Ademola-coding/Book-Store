/* eslint-disable */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Books from './components/Books';
import Categories from './components/CategoriesPages';
import NavBar from './components/NavBar';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
