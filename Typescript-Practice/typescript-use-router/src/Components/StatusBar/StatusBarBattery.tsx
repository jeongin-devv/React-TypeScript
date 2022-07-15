import React from 'react';
import { StatusBarBatteryWrap } from './StatusBarStyles';

const StatusBarBattery = () => {
  const batteryPercent = '100%';
  return (
    <StatusBarBatteryWrap>
      <span>{batteryPercent}</span>
      <i className="fas fa-battery-full fa-lg" />
      <i className="fas fa-bolt" />
    </StatusBarBatteryWrap>
  );
};

export default StatusBarBattery;
