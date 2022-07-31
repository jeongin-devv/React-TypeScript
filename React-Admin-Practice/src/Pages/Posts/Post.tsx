/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import {
  Datagrid, EditButton, List, ReferenceField, TextField, SimpleList,
} from 'react-admin';
import PostFilter from './PostFilter';

export default () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <List filters={PostFilter}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          // eslint-disable-next-line no-unused-vars
          secondaryText={(record) => (
            <ReferenceField label="User" source="userId" reference="users">
              <TextField source="name" />
            </ReferenceField>
          )}
        />
      ) : (
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
      )}
    </List>
  );
};
