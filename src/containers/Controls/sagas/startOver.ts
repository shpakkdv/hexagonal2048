import { batchActions } from 'redux-batched-actions';
import { put, select } from 'redux-saga/effects';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import { setField, setNewCellsToAnimate } from 'containers/GameField/actions';
import { createInitialGameField } from 'utils/createInitialGameField';
import { setGameSize } from '../actions';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function* startOver(action: Action.StartOver) {
  try {
    const confirmed = confirm('Do you want to start over?');
    if (!confirmed) {
      return;
    }

    const gameSize: ReturnSagaType<typeof controlsSelectors.gameSize> = yield select(controlsSelectors.gameSize);
    const gamePlayMode: ReturnSagaType<typeof controlsSelectors.gamePlayMode> = yield select(controlsSelectors.gamePlayMode);
    const { field, addedCells } = createInitialGameField(gameSize, gamePlayMode);

    yield put(batchActions([
      setGameSize(gameSize),
      setField(field),
      setAppStatus(AppStatus.InProgress),
      setNewCellsToAnimate(addedCells),
    ]));
  } catch (error) {
    console.warn('Error occurred during starting over.', error);
  }
}
