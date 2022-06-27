import React, { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { ChatsDetailPath as path } from '../RootPath';
import ChatsDetail from '../../Pages/Chats/ChatsDetail';

const element : ReactElement = <ChatsDetail />;

const ChatsDetailRoute : RouteObject = {
  path,
  element,
};

export default ChatsDetailRoute;
