import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Focus from './components/Focus';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='focus' element={<Focus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
