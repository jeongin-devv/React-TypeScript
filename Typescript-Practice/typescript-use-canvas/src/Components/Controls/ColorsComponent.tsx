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

  const disabledBorder = () => {
    const colorNodes = document.querySelectorAll('.controls__color');
    colorNodes.forEach((color) => {
      const target = color as HTMLElement;
      target.style.border = 'none';
    });
  };

  const colorHandler = (event:React.MouseEvent, color : string) => {
    const props = {
      color,
    };
    canvasStore.setCanvasProps(props);
    disabledBorder();
    const target = event.target as HTMLElement;
    target.style.border = '2px solid black';
  };

  return (
    <div className="controls__colors" id="tsColors">
      {colors.map((color) => (
        <div
          key={color}
          className="controls__color"
          style={{ backgroundColor: color }}
          aria-hidden="true"
          onClick={(event) => colorHandler(event, color)}
        />
      ))}
    </div>
  );
});

export default ColorsComponent;
