import React from 'react';
import ButtonComponent from './ButtonsComponent';
import ColorsComponent from './ColorsComponent';
import RangeComponent from './RangeComponent';

const ControlsComponent = () => (
  <div className="controls">
    <RangeComponent />
    <ButtonComponent />
    <ColorsComponent />
  </div>
);

export default ControlsComponent;
