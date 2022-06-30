import React, { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { SearchPath as path } from '../RootPath';
import Search from '../../Pages/Search/Search';

const element : ReactElement = <Search />;

const FriendsRoute : RouteObject = {
  path,
  element,
};

export default FriendsRoute;
