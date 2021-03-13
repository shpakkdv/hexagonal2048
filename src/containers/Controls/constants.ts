import { keyMirror } from 'utils/keyMirror';

export const ActionType = keyMirror(
  {
    CHANGE_GAME_PLAY_MODE: null,
    CHANGE_GAME_SIZE: null,
    CHANGE_SERVER_URL: null,
    INITIATE_FIELD: null,
    MOVE: null,
    SET_APP_STATUS: null,
    SET_CELL_SIZE: null,
    SET_GAME_PLAY_MODE: null,
    SET_GAME_MODE: null,
    SET_GAME_SIZE: null,
    SET_URL: null,
    START_OVER: null,
  },
  'Controls',
);
