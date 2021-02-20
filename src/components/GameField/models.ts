import type { AppStatus, GameMode } from 'constant';
import { HexagonArray } from 'models';

export interface GameFieldProps {
  field: HexagonArray;
  gameMode: GameMode;
  appStatus: AppStatus;
  cellSize: number;
}
