import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { RootPath as path } from './RootPath';
import Login from '../Pages/Login/Login';
import FriendsRoute from './Routes/FriendsRoute';
import ChatsRoute from './Routes/ChatsRoute';
import ChatsDetailRoute from './Routes/ChatsDetailRoute';

const rootElement = <Login />;

const RootRoute : RouteObject = {
  path,
  element: rootElement,
};

const RootRouter = () => useRoutes([
  RootRoute,
  FriendsRoute,
  ChatsRoute,
  ChatsDetailRoute,
]);

export default RootRouter;
