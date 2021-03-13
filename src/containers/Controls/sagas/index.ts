import { takeLatest, Effect } from 'redux-saga/effects';

import { ActionType } from '../constants';
import { changeGamePlayMode } from './changeGamePlayMode';
import { changeGameSize } from './changeGameSize';
import { changeServerUrl } from './changeServerUrl';
import { initiateField } from './initiateField';
import { move } from './move';
import { startOver } from './startOver';

const effects: Effect[] = [
  takeLatest(ActionType.CHANGE_GAME_PLAY_MODE, changeGamePlayMode),
  takeLatest(ActionType.CHANGE_GAME_SIZE, changeGameSize),
  takeLatest(ActionType.CHANGE_SERVER_URL, changeServerUrl),
  takeLatest(ActionType.INITIATE_FIELD, initiateField),
  takeLatest(ActionType.MOVE, move),
  takeLatest(ActionType.START_OVER, startOver),
];

export default effects;
