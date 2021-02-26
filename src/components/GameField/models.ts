import type { AppStatus, GameMode } from 'constant';
import * as ControlsModels from 'containers/Controls/models';
import { HexagonArray, RealCell } from 'models';

export interface GameFieldProps {
  appearedCells: RealCell[];
  field: HexagonArray;
  gameSize: number;
  gameMode: GameMode;
  appStatus: AppStatus;
  cellSize: number;
  initiateField: ControlsModels.ActionCreator.InitiateField;
}
