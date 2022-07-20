import React from 'react';
// import { Admin, Resource, ListGuesser } from 'react-admin';
// import { Admin, Resource, EditGuesser } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import UserList from './Pages/User/User';
import PostList from './Pages/Posts/Post';
import PostEdit from './Pages/Posts/PostEdit';
import PostCreate from './Pages/Posts/PostCreate';
import Dashboard from './Pages/Dashboard/Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
