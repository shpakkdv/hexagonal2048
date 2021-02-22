import type { AppStatus, GameMode, GamePlayMode } from 'constant';
import * as ControlsModels from 'containers/Controls/models';

export interface ControlsProps {
  appStatus: AppStatus;
  cellSize: number;
  gameMode: GameMode;
  gamePlayMode: GamePlayMode;
  gameSize: number;

  changeGamePlayMode: ControlsModels.ActionCreator.ChangeGamePlayMode;
  changeGameSize: ControlsModels.ActionCreator.ChangeGameSize;
  move: ControlsModels.ActionCreator.Move;
  setCellSize: ControlsModels.ActionCreator.SetCellSize;
  setGameMode: ControlsModels.ActionCreator.SetGameMode;
  startOver: ControlsModels.ActionCreator.StartOver;
}
