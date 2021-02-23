import type { AppStatus, Direction, GameMode, GamePlayMode } from 'constant';
import { AppState, IAction, IEmptyAction } from 'models';

export type State = AppState['controls'];

export namespace Payload {
  export interface SetCellSize {
    cellSize: number;
  }
  export interface ChangeGamePlayMode {
    gamePlayMode: GamePlayMode;
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
  export interface SetGamePlayMode {
    gamePlayMode: GamePlayMode;
  }
  export interface SetGameSize {
    gameSize: number;
  }
  export interface Move {
    direction: Direction;
  }
}

export namespace Action {
  export type ChangeGamePlayMode = IAction<Payload.ChangeGamePlayMode>;
  export type ChangeGameSize = IAction<Payload.ChangeGameSize>;
  export type InitiateField = IEmptyAction;
  export type Move = IAction<Payload.Move>;
  export type SetAppStatus = IAction<Payload.SetAppStatus>;
  export type SetCellSize = IAction<Payload.SetCellSize>;
  export type SetGameMode = IAction<Payload.SetGameMode>;
  export type SetGamePlayMode = IAction<Payload.SetGamePlayMode>;
  export type SetGameSize = IAction<Payload.SetGameSize>;
  export type StartOver = IEmptyAction;
}

export namespace ActionCreator {
  export type ChangeGamePlayMode = (gamePlayMode: GamePlayMode) => Action.ChangeGamePlayMode;
  export type ChangeGameSize = (gameSize: number) => Action.ChangeGameSize;
  export type InitiateField = () => Action.InitiateField;
  export type Move = (direction: Direction) => Action.Move;
  export type SetAppStatus = (appStatus: AppStatus) => Action.SetAppStatus;
  export type SetCellSize = (cellSize: number) => Action.SetCellSize;
  export type SetGameMode = (gameMode: GameMode) => Action.SetGameMode;
  export type SetGamePlayMode = (gamePlayMode: GamePlayMode) => Action.SetGamePlayMode;
  export type SetGameSize = (gameSize: number) => Action.SetGameSize;
  export type StartOver = () => Action.StartOver;
}
