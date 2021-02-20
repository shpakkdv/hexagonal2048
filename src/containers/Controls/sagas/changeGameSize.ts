import { batchActions } from 'redux-batched-actions';
import { put, select } from 'redux-saga/effects';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import { setField } from 'containers/GameField/actions';
import { createInitialHexagon } from 'utils/createInitialHexagon';
import { setGameSize } from '../actions';
import { Action } from '../models';

export function* changeGameSize(action: Action.SetGameSize) {
  try {
    const { gameSize } = action.payload;

    const confirmed = confirm('Do you want to start a new game?');
    if (!confirmed) {
      return;
    }

    const field = createInitialHexagon(gameSize);

    yield put(batchActions([
      setGameSize(gameSize),
      setField(field),
      setAppStatus(AppStatus.InProgress),
    ]));
  } catch (error) {
    console.warn('Error occurred during setting game size.', error);
  }
}
