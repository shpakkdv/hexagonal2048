import type { AppStatus, GameMode } from 'constant';
import * as ControlsModels from 'containers/Controls/models';
import { HexagonArray } from 'models';

export interface GameFieldProps {
  field: HexagonArray;
  gameSize: number;
  gameMode: GameMode;
  appStatus: AppStatus;
  cellSize: number;
  initiateField: ControlsModels.ActionCreator.InitiateField;
}
