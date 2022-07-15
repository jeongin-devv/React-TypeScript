import React, { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { ChatsPath as path } from '../RootPath';
import Chats from '../../Pages/Chats/Chats';

const element : ReactElement = <Chats />;

const ChatsRoute : RouteObject = {
  path,
  element,
};

export default ChatsRoute;
