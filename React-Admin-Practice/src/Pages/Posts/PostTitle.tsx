import React from 'react';
import { useRecordContext } from 'react-admin';

export default () => {
  const record = useRecordContext();
  return <span>Post {record ? ` : ${record.title}` : ''}</span>;
};
