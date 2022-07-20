import React from 'react';
import {
  Edit, ReferenceInput, SelectInput, SimpleForm, TextInput,
} from 'react-admin';
import PostTitle from './PostTitle';

export default () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        {/* <SelectInput optionText="id" /> */}
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);
