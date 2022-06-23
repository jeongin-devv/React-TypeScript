import React from 'react';
import { observer } from 'mobx-react';
import { canvasStore } from '../../Store/CanvasStore';

type Color = string[];

const ColorsComponent = observer(() => {
  const colors : Color = [
    '#2c2c2c',
    'white',
    '#FF3B30',
    '#FF9500',
    '#FFCC00',
    '#4CD963',
    '#5AC8FA',
    '#0579FF',
    '#5856D6',
  ];

  const colorHandler = (color : string) => {
    canvasStore.canvasProps.color = color;
  };

  return (
    <div className="controls__colors" id="tsColors">
      {colors.map((color) => (
        <div
          key={color}
          className="controls__color"
          style={{ backgroundColor: color }}
          aria-hidden="true"
          onClick={() => colorHandler(color)}
        />
      ))}
    </div>
  );
});

export default ColorsComponent;
