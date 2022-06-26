import React from 'react';
import { StatusBarNetworksWrap } from './StatusBarStyles';

const StatusBarNetworks = () => {
  const statusText = 'No Service';
  return (
    <StatusBarNetworksWrap>
      <span>{statusText}</span>
      <i className="fas fa-wifi" />
      {/* <i className="fa-solid fa-globe" /> */}
    </StatusBarNetworksWrap>
  );
};

export default StatusBarNetworks;
