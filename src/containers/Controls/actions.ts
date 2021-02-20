import { ActionType } from './constants';
import { ActionCreator } from './models';

export const move: ActionCreator.Move = (direction) => ({
  type: ActionType.MOVE,
  payload: {
    direction,
  },
});

export const setAppStatus: ActionCreator.SetAppStatus = (appStatus) => ({
  type: ActionType.SET_APP_STATUS,
  payload: {
    appStatus,
  },
});

export const setCellSize: ActionCreator.SetCellSize = (cellSize) => ({
  type: ActionType.SET_CELL_SIZE,
  payload: {
    cellSize,
  },
});

export const setGameMode: ActionCreator.SetGameMode = (gameMode) => ({
  type: ActionType.SET_GAME_MODE,
  payload: {
    gameMode,
  },
});

export const setGameSize: ActionCreator.SetGameSize = (gameSize) => ({
  type: ActionType.SET_GAME_SIZE,
  payload: {
    gameSize,
  },
});

export const changeGameSize: ActionCreator.SetGameSize = (gameSize) => ({
  type: ActionType.CHANGE_GAME_SIZE,
  payload: {
    gameSize,
  },
});

export const startOver: ActionCreator.StartOver = () => ({
  type: ActionType.START_OVER,
});
