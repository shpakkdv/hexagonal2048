import type { AppStatus, GameMode } from 'constant';

export * from './common';

export type FakeCell = null;
/**
 * [q - rowIndex, r - cellIndex, value]
 */
export type RealCell = [number, number, number | null];
/**
 * [q - rowIndex, r - cellIndex, value]
 */
export type Cell = RealCell | FakeCell;
export type HexagonArray = Cell[][];

export type GetDirectionRow = (field: HexagonArray, r: number, q: number) => Cell[];

export interface AppState {
  controls: {
    appStatus: AppStatus;
    /** Integer: [2..10] */
    gameSize: number;
    /** Integer: [5..200] */
    cellSize: number;
    valuesToAdd: number[];
    gameMode: GameMode;
  };

  gameField: {
    field: HexagonArray;
  };
}
