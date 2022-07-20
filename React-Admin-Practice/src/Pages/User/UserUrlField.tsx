import React from 'react';
import { useRecordContext } from 'react-admin';
import { Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

interface Props {
  source:string;
}

export default ({ source }:Props) => {
  const record = useRecordContext();
  return record ? (
    <Link href={record[source]} style={{ textDecoration: 'none' }}>
      {record[source]}
      <LaunchIcon style={{ width: '0.5em', height: '0.5em', marginLeft: '0.3em' }} />
    </Link>
  ) : null;
};
