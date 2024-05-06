import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
  

function App() {
  return (
    <div className="App">
      <div className="navlink">
        <NavLink to={"/"} className='home-link'> Home </NavLink>
        <NavLink to={"blog"} className='blog-link'> Blog </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
