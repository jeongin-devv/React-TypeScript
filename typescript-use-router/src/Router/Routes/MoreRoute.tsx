import React, { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { MorePath as path } from '../RootPath';
import More from '../../Pages/More/More';

const element : ReactElement = <More />;

const MoreRoute : RouteObject = {
  path,
  element,
};

export default MoreRoute;
