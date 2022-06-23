import React, {
  SyntheticEvent, useRef, useCallback, useEffect,
} from 'react';
import { observer } from 'mobx-react';
import { canvasStore } from '../../Store/CanvasStore';

const CanvasComponent = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onMouseDown = useCallback(({ nativeEvent }
    : SyntheticEvent<HTMLCanvasElement, MouseEvent>) => {
    const coordinate = canvasStore.getNewCoordinates(nativeEvent, canvasRef);
    if (coordinate) {
      canvasStore.setIsPainting(true);
      canvasStore.setCoordinate(coordinate);
    }
  }, []);

  const onMouseMove = useCallback(({ nativeEvent }
    : SyntheticEvent<HTMLCanvasElement, MouseEvent>) => {
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();
    const isPainting = canvasStore.getIsPainting();
    if (isPainting) {
      const newCoordinates = canvasStore.getNewCoordinates(nativeEvent, canvasRef);
      const currentCoordinate = canvasStore.getCurrentCoordinates();
      if (newCoordinates && currentCoordinate) {
        canvasStore.setDrawLine(currentCoordinate, newCoordinates, canvasRef);
        canvasStore.setCoordinate(newCoordinates);
      }
    }
  }, []);

  const onMouseUp = useCallback(() => {
    canvasStore.setIsPainting(false);
  }, []);

  const onContextMenu = ({ nativeEvent }
    : SyntheticEvent<HTMLCanvasElement, MouseEvent>) => {
    nativeEvent.preventDefault();
  };

  const { width, height } = canvasStore.canvasProps;
  useEffect(() => {
    canvasStore.canvasRef = canvasRef;
    const context = canvasRef.current?.getContext('2d');
    context!.fillStyle = 'white';
    context!.fillRect(0, 0, canvasStore.canvasProps.width, canvasStore.canvasProps.height);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="tsCanvas"
      width={width}
      height={height}
      className="canvas"
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onContextMenu={onContextMenu}
    />
  );
});

export default CanvasComponent;
