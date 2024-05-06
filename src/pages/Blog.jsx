import React from 'react'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='blog'>
    <h1>Blog</h1>
    <div className="blogs">
        <NavLink to="first-blog"> First Blog </NavLink>
        <NavLink to="second-blog"> Second Blog </NavLink>
        <NavLink to="third-blog"> Third Blog </NavLink>
        <NavLink to="forth-blog"> Fourth Blog </NavLink>
        <NavLink to="fifth-blog"> Fifth Blog </NavLink>
        <NavLink to="sixth-blog"> Sixth Blog </NavLink>

        {/* <div>Blog 1</div>
        <div>Blog 2</div>
        <div>Blog 3</div>
        <div>Blog 4</div>
        <div>Blog 5</div>
    <div>Blog 6</div> */}
    </div>
    {/* <Outlet /> */}
 </div>
  )
}

export default Blog