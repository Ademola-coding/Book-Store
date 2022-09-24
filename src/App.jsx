import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header-nav/Navbar';
import Categories from './pages/Categories';
import Books from './pages/Books';

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
