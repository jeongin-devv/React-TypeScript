import React, { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { FriendsPath as path } from '../RootPath';
import Friends from '../../Pages/Friends/Friends';

const element : ReactElement = <Friends />;

const FriendsRoute : RouteObject = {
  path,
  element,
};

export default FriendsRoute;
