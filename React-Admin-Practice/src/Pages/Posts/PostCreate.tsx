import React from 'react';
import {
  Create, ReferenceInput, SelectInput, SimpleForm, TextInput,
} from 'react-admin';

export default () => (
  <Create>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        {/* <SelectInput optionText="id" /> */}
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
