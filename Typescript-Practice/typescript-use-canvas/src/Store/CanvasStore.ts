import { RefObject } from 'react';
import { observable, action } from 'mobx';

export interface CanvasProps {
  width: number;
  height: number;
  fillMode: boolean;
  color: string;
  lineWidth: number;
  [props:string]:any;
}

export interface SetCanvasProps {
  width?: number;
  height?: number;
  fillMode?: boolean;
  color?: string;
  lineWidth?: number;
  [props:string]:any;
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
  getCurrentCoordinates: () => Coordinate;
  setCanvasProps: (object: SetCanvasProps) => void;
  setFillMode: () => void;
  setIsPainting: (flag : boolean) => void;
  setCoordinate: (obj : Coordinate) => void;
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
  getIsPainting: () => canvasStore.isPainting,
  getCurrentCoordinates: () => canvasStore.coordinate,
  setCanvasProps: action((obj : SetCanvasProps) => {
    Object.keys(obj).forEach((key) => {
      if (canvasStore.canvasProps[key]) {
        canvasStore.canvasProps[key] = obj[key];
      }
    });
  }),
  setFillMode: action(() => {
    canvasStore.canvasProps.fillMode = !canvasStore.canvasProps.fillMode;
  }),
  setIsPainting: action((flag : boolean) => {
    canvasStore.isPainting = flag;
  }),
  setCoordinate: action((obj : Coordinate) => {
    canvasStore.coordinate = obj;
  }),
});

export default { canvasStore };
