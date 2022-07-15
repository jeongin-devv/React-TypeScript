import React from 'react';
import StatusBarNetworks from './StatusBarNetworks';
import StatusBarClock from './StatusBarClock';
import StatusBarBattery from './StatusBarBattery';
import { StatusBarWrap } from './StatusBarStyles';

const StatusBar = () => (
  <StatusBarWrap>
    <StatusBarNetworks />
    <StatusBarClock />
    <StatusBarBattery />
  </StatusBarWrap>
);

export default StatusBar;
