import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { RootPath as path } from './RootPath';
import Login from '../Pages/Login/Login';
import FriendsRoute from './Routes/FriendsRoute';

const rootElement = <Login />;

const RootRoute : RouteObject = {
  path,
  element: rootElement,
};

const RootRouter = () => useRoutes([
  RootRoute,
  FriendsRoute,
]);

export default RootRouter;
