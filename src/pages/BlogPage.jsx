import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../pages/blogs/data.json"

const BlogPage = () => {
  const { id } = useParams();
  console.log(id);
  const b = data.blog.find((blogs) => blogs.path === id);

  console.log(b); 
  return (
    <div>
      <h1>Blogs</h1>
      <h2> {b.title} </h2>
      <p> {b.description} </p>
    </div>
  )
}

export default BlogPage