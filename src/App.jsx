import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header-nav/Navbar';
import Books from './pages/bookPage';
import Categories from './pages/categoriesPage';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}
