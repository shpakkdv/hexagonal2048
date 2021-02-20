import { takeLatest, Effect } from 'redux-saga/effects';

import { ActionType } from '../constants';
import { changeGameSize } from './changeGameSize';
import { move } from './move';
import { startOver } from './startOver';

const effects: Effect[] = [
  takeLatest(ActionType.CHANGE_GAME_SIZE, changeGameSize),
  takeLatest(ActionType.MOVE, move),
  takeLatest(ActionType.START_OVER, startOver),
];

export default effects;
