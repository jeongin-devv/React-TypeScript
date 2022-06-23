import { RefObject } from 'react';
import { observable, action } from 'mobx';

export interface CanvasProps {
  width: number;
  height: number;
  fillMode: boolean;
  color: string;
  lineWidth: number;
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface CanvasStore {
  canvasProps: CanvasProps;
  coordinate: Coordinate;
  isPainting: boolean;
  canvasRef: RefObject<HTMLCanvasElement> | null,
  getIsPainting: () => boolean;
  getNewCoordinates: (event: MouseEvent, canvasRef: RefObject<HTMLCanvasElement>)
    => Coordinate | undefined;
  getCurrentCoordinates: () => Coordinate | undefined ;
  setFillMode: () => void;
  setIsPainting: (flag : boolean) => void;
  setCoordinate: (obj : Coordinate) => void;
  setDrawLine: (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate,
    canvasRef: RefObject<HTMLCanvasElement>) => void;
}

export const canvasStore : CanvasStore = observable<CanvasStore>({
  canvasProps: {
    width: 700,
    height: 700,
    fillMode: false,
    color: 'black',
    lineWidth: 2.5,
  },
  coordinate: {
    x: 0,
    y: 0,
  },
  canvasRef: null,
  isPainting: false,
  getIsPainting: () : boolean => {
    const returnValue = canvasStore.isPainting;
    return returnValue;
  },
  getCurrentCoordinates: () => {
    const resultValue = canvasStore.coordinate;
    return resultValue;
  },
  getNewCoordinates: (event: MouseEvent, canvasRef: RefObject<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const coordinate : Coordinate = {
        x: event.pageX - canvas.offsetLeft,
        y: event.pageY - canvas.offsetTop,
      };
      return coordinate;
    }
    return undefined;
  },
  setFillMode: () => {
    canvasStore.canvasProps.fillMode = !canvasStore.canvasProps.fillMode;
  },
  setIsPainting: action((flag : boolean) => {
    canvasStore.isPainting = flag;
  }),
  setCoordinate: action((obj : Coordinate) => {
    canvasStore.coordinate = obj;
  }),
  setDrawLine: (
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
  },
});

export default { canvasStore };
