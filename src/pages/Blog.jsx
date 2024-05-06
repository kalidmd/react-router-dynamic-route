import React from 'react'
import { NavLink } from 'react-router-dom'
import data from './blogs/data.json';

const Blog = () => {
  const datas = data.blog.map(blog => {
    return (
      <NavLink key={blog.path} to={blog.path}> {blog.title} </NavLink>
    )
  })

  return (
    <div className='blog'>
      <h1>Blogs</h1>
      <div className="blogs">
          {datas}
      </div>
  </div>
  )
}

export default Blog