import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home, About, Posts, Post, DefaultPost } from '../pages';

const MainRouter = () => {
  return useRoutes([
    {
      path: '/', 
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
      children:[
        {path: ':name', element: <About />},
        {path: 'id', element: <About />}
      ]
    },
    {
      path: 'posts/*',
      element: <Posts />,
      children:[
        {path:'', element: <DefaultPost />},
        {path:':id', element: <Post />},
      ]
    },
  ])
};

export default MainRouter;