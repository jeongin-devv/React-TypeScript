import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const url = () => {
    return{
      home: '/',
      about: '/about',
      foo: '/about/foo',
      posts: '/posts',
    }
  }

  const { home, about, foo, posts } = url();

  const activeStyle = (props) => {
    return {
      color: props.isActive ? 'red' : 'black',
      fontSize: props.isActive ? '2rem' : '1rem',
    }
  }

  return (
    <div>
      <ul>
        <li><NavLink to={home} style={activeStyle} end><h2>홈</h2></NavLink></li>
        <li><NavLink to={about} style={activeStyle} end><h2>About</h2></NavLink></li>
        <li><NavLink to={foo} style={activeStyle} end><h2>About Foo</h2></NavLink></li>
        <li><NavLink to={posts} style={activeStyle} end><h2>Posts</h2></NavLink></li>
      </ul>
    </div>
  )
}

export default Menu;