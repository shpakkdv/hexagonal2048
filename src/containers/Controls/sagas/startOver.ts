import { batchActions } from 'redux-batched-actions';
import { put, select } from 'redux-saga/effects';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import { setField } from 'containers/GameField/actions';
import { createInitialHexagon } from 'utils/createInitialHexagon';
import { setGameSize } from '../actions';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* startOver(action: Action.StartOver) {
  try {
    const confirmed = confirm('Do you want to start over?');
    if (!confirmed) {
      return;
    }

    const gameSize: ReturnSagaType<typeof controlsSelectors.gameSize> = yield select(controlsSelectors.gameSize);
    const field = createInitialHexagon(gameSize);

    yield put(batchActions([
      setGameSize(gameSize),
      setField(field),
      setAppStatus(AppStatus.InProgress),
    ]));
  } catch (error) {
    console.warn('Error occurred during starting over.', error);
  }
}
