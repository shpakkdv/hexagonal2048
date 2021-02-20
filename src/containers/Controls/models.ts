import type { AppStatus, Direction, GameMode } from 'constant';
import { AppState, IAction, IEmptyAction } from 'models';

export type State = AppState['controls'];

export namespace Payload {
  export interface SetCellSize {
    cellSize: number;
  }
  export interface ChangeGameSize {
    gameSize: number;
  }
  export interface SetAppStatus {
    appStatus: AppStatus;
  }
  export interface SetGameMode {
    gameMode: GameMode;
  }
  export interface SetGameSize {
    gameSize: number;
  }
  export interface Move {
    direction: Direction;
  }
}

export namespace Action {
  export type SetCellSize = IAction<Payload.SetCellSize>;
  export type ChangeGameSize = IAction<Payload.ChangeGameSize>;
  export type Move = IAction<Payload.Move>;
  export type SetAppStatus = IAction<Payload.SetAppStatus>;
  export type SetGameMode = IAction<Payload.SetGameMode>;
  export type SetGameSize = IAction<Payload.SetGameSize>;
  export type StartOver = IEmptyAction;
}

export namespace ActionCreator {
  export type SetCellSize = (cellSize: number) => Action.SetCellSize;
  export type Move = (direction: Direction) => Action.Move;
  export type ChangeGameSize = (gameSize: number) => Action.ChangeGameSize;
  export type SetAppStatus = (appStatus: AppStatus) => Action.SetAppStatus;
  export type SetGameMode = (gameMode: GameMode) => Action.SetGameMode;
  export type SetGameSize = (gameSize: number) => Action.SetGameSize;
  export type StartOver = () => Action.StartOver;
}
