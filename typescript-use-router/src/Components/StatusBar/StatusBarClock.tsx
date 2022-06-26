import React from 'react';
import { StatusBarClockWrap } from './StatusBarStyles';

const StatusBarClock = () => {
  const today = new Date();
  const nowTime = `${today.getHours()}:${today.getMinutes()}`;
  return (
    <StatusBarClockWrap>
      <span>{nowTime}</span>
    </StatusBarClockWrap>
  );
};

export default StatusBarClock;
