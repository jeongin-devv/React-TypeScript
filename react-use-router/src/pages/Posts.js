import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Posts = () => {
  return (
    <div>
      <h2>Post List</h2> 
      <ul>
        <li><Link to='1'>Post #1</Link></li>
        <li><Link to='2'>Post #2</Link></li>
        <li><Link to='3'>Post #3</Link></li>
        <li><Link to='4'>Post #4</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Posts