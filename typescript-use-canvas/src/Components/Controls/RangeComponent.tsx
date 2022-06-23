import React from 'react';
import { observer } from 'mobx-react';
import { canvasStore } from '../../Store/CanvasStore';

interface rangeOption {
  type: string;
  id: string;
  min: string;
  max: string;
  defaultValue: string;
  step: string;
}

const RangeComponent = observer(() => {
  const rangeProps : rangeOption = {
    type: 'range',
    id: 'tsRange',
    min: '1',
    max: '5',
    defaultValue: '2.5',
    step: '0.1',
  };

  const rangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
    canvasStore.canvasProps.lineWidth = parseFloat(event.target.value);
  };

  return (
    <div className="controls__range">
      <input
        type={rangeProps.type}
        id={rangeProps.id}
        min={rangeProps.min}
        max={rangeProps.max}
        defaultValue={rangeProps.defaultValue}
        step={rangeProps.step}
        onChange={rangeHandler}
      />
    </div>
  );
});

export default RangeComponent;
