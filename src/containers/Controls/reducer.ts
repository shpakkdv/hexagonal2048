import { Reducer } from 'redux';

import { IAction } from 'models';
import { AppStatus, DEFAULT_CELL_SIZE, GameMode } from 'constant';
import { getDefaultGameInfo } from 'utils/getDefaultGameInfo';
import { getValuesToAdd } from 'utils/getValuesToAdd';
import { ActionType } from './constants';
import { State, Action } from './models';

const { gameSize, gamePlayMode, url } = getDefaultGameInfo();

const initialState: State = {
  gameSize,
  valuesToAdd: getValuesToAdd(gameSize),
  gameMode: GameMode.Pointy,
  gamePlayMode,
  appStatus: AppStatus.InProgress,
  cellSize: DEFAULT_CELL_SIZE,
  url,
};

const reducer: Reducer<State, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GAME_SIZE:
      return setGameSize(state, action);
    case ActionType.SET_GAME_MODE:
      return setGameMode(state, action);
    case ActionType.SET_GAME_PLAY_MODE:
      return setGamePlayMode(state, action);
    case ActionType.SET_APP_STATUS:
      return setAppStatus(state, action);
    case ActionType.SET_CELL_SIZE:
      return setCellSize(state, action);
    case ActionType.SET_URL:
      return setUrl(state, action);

    default:
      return state;
  }
};

export default reducer;

export const setGameSize: Reducer<State, Action.SetGameSize> = (state, { payload: { gameSize } }) => ({
  ...state!,
  gameSize,
  valuesToAdd: getValuesToAdd(gameSize),
});

export const setGameMode: Reducer<State, Action.SetGameMode> = (state, { payload: { gameMode } }) => ({
  ...state!,
  gameMode,
});

export const setGamePlayMode: Reducer<State, Action.SetGamePlayMode> = (state, { payload: { gamePlayMode } }) => ({
  ...state!,
  gamePlayMode,
});

export const setAppStatus: Reducer<State, Action.SetAppStatus> = (state, { payload: { appStatus } }) => ({
  ...state!,
  appStatus,
});

export const setCellSize: Reducer<State, Action.SetCellSize> = (state, { payload: { cellSize } }) => ({
  ...state!,
  cellSize,
});

export const setUrl: Reducer<State, Action.SetUrl> = (state, { payload: { url } }) => ({
  ...state!,
  url,
});
