import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { RootPath as path } from './RootPath';

const rootElement = <div />;

const RootRoute : RouteObject = {
  path,
  element: rootElement,
};

const RootRouter = () => useRoutes([
  RootRoute,
]);

export default RootRouter;
