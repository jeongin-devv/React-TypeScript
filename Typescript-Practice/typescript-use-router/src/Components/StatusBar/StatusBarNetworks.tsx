import React from 'react';
import { StatusBarNetworksWrap } from './StatusBarStyles';

const StatusBarNetworks = () => {
  const statusText = 'No Service';
  return (
    <StatusBarNetworksWrap>
      <span>{statusText}</span>
      <i className="fas fa-wifi" />
    </StatusBarNetworksWrap>
  );
};

export default StatusBarNetworks;
