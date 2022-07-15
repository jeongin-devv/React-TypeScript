import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { RootPath as path } from './RootPath';
import Login from '../Pages/Login/Login';
import FriendsRoute from './Routes/FriendsRoute';
import ChatsRoute from './Routes/ChatsRoute';
import ChatsDetailRoute from './Routes/ChatsDetailRoute';
import SearchRoute from './Routes/SearchRoute';
import MoreRoute from './Routes/MoreRoute';

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
  SearchRoute,
  MoreRoute,
]);

export default RootRouter;
