import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/'>List</NavLink>
        {' '}-{' '}
        <NavLink to='focus'>Focus</NavLink>
      </nav>
      <br />
      <Routes>
        <Route path='/' element={<ListScreen />} />
        <Route path='focus' element={<FocusScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
