import type { AppStatus, GameMode, GamePlayMode } from 'constant';

export * from './common';

export type FakeCell = null;
/** null or number among the range [2, 4, ... Math.pow(2, n)] */
export type CellValue = number | null;

/** Axial coordinates real cell info: `[q - cellIndex, r - rowIndex, value]` */
export type RealCell = [number, number, CellValue];
/** Axial coordinates cell info: `[q - cellIndex, r - rowIndex, value]` */
export type Cell = RealCell | FakeCell;
export type HexagonArray = Cell[][];

/** Cube coordinates real cell info */
export interface CubeRealCell {
  x: number;
  y: number;
  z: number;
  value: CellValue;
}
/** Cube coordinates cell info */
export type CubeCell = CubeRealCell | FakeCell;
export type HexagonCubeArray = CubeCell[][];

export type GetDirectionRow = (field: HexagonArray, r: number, q: number) => Cell[];

export interface AppState {
  controls: {
    appStatus: AppStatus;
    /** Integer */
    gameSize: number;
    /** Integer in px */
    cellSize: number;
    valuesToAdd: number[];
    gameMode: GameMode;
    gamePlayMode: GamePlayMode;
    url: string;
  };

  gameField: {
    field: HexagonArray;
    animation: {
      appearedCells: RealCell[];
    };
  };
}
