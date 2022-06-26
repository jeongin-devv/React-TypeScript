import React from 'react';
import { SpinnerIcon } from './SpinnerStyles';
import { SpinnerType } from './SpinnerType';

const Spinner = ({ width, height } : SpinnerType) => (
  <SpinnerIcon width={width} height={height}>
    <div /><div /><div /><div />
    <div /><div /><div /><div />
    <div /><div /><div /><div />
  </SpinnerIcon>
);

export default Spinner;
