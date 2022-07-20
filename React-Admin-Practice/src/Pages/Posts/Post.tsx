import React from 'react';
import {
  Datagrid, EditButton, List, ReferenceField, TextField,
} from 'react-admin';
import PostFilter from './PostFilter';

export default () => (
  <List filters={PostFilter}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        {/* <TextField source="id" /> */}
        <TextField source="name" />
      </ReferenceField>
      {/* <TextField source="id" /> */}
      <TextField source="title" />
      {/* <TextField source="body" /> */}
      <EditButton />
    </Datagrid>
  </List>
);
