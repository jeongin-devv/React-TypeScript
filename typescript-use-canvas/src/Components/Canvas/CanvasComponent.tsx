import React, {
  SyntheticEvent, useRef, useCallback, useEffect, RefObject,
} from 'react';
import { observer } from 'mobx-react';
import { canvasStore, Coordinate } from '../../Store/CanvasStore';

const CanvasComponent = observer(() => {
  const canvasRefs = useRef<HTMLCanvasElement>(null);
  const { width, height } = canvasStore.canvasProps;

  const setDrawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate,
    canvasRef: RefObject<HTMLCanvasElement>,
  ) => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        if (canvasStore.canvasProps.fillMode) {
          context.fillStyle = canvasStore.canvasProps.color;
          context.fillRect(0, 0, canvas.width, canvas.height);
        } else {
          context.strokeStyle = canvasStore.canvasProps.color;
          context.lineJoin = 'round';
          context.lineWidth = canvasStore.canvasProps.lineWidth;

          context.beginPath();
          context.moveTo(originalMousePosition.x, originalMousePosition.y);
          context.lineTo(newMousePosition.x, newMousePosition.y);
          context.closePath();

          context.stroke();
        }
      }
    }
  };

  const getNewCoordinates = (event: MouseEvent, canvasRef: RefObject<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const coordinate : Coordinate = {
        x: event.pageX - canvas.offsetLeft,
        y: event.pageY - canvas.offsetTop,
      };
      return coordinate;
    }
    return undefined;
  };

  const onMouseDown = useCallback(({ nativeEvent }
    : SyntheticEvent<HTMLCanvasElement, MouseEvent>) => {
    const coordinate = getNewCoordinates(nativeEvent, canvasRefs);
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
      const newCoordinates = getNewCoordinates(nativeEvent, canvasRefs);
      const currentCoordinate = canvasStore.getCurrentCoordinates();
      if (newCoordinates && currentCoordinate) {
        setDrawLine(currentCoordinate, newCoordinates, canvasRefs);
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

  useEffect(() => {
    canvasStore.canvasRef = canvasRefs;
    const context = canvasRefs.current?.getContext('2d');
    context!.fillStyle = 'white';
    context!.fillRect(0, 0, canvasStore.canvasProps.width, canvasStore.canvasProps.height);
  }, []);

  return (
    <canvas
      ref={canvasRefs}
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
