import React from 'react';
import { StatusBarClockWrap } from './StatusBarStyles';

const StatusBarClock = () => {
  const today = new Date();
  const timeConverter = (number: number) => (number < 10 ? `0${number}` : number);
  const nowTime = `${timeConverter(today.getHours())}:${timeConverter(today.getMinutes())}`;
  return (
    <StatusBarClockWrap>
      <span>{nowTime}</span>
    </StatusBarClockWrap>
  );
};

export default StatusBarClock;
