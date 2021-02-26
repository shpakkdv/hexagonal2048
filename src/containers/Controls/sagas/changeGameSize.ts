import { batchActions } from 'redux-batched-actions';
import { put, select } from 'redux-saga/effects';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import { setField, setNewCellsToAnimate } from 'containers/GameField/actions';
import { createInitialGameField } from 'utils/createInitialGameField';
import { setGameSize } from '../actions';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* changeGameSize(action: Action.ChangeGameSize) {
  try {
    const { gameSize } = action.payload;

    const confirmed = confirm('Do you want to start a new game?');
    if (!confirmed) {
      return;
    }

    const gamePlayMode: ReturnSagaType<typeof controlsSelectors.gamePlayMode> = yield select(controlsSelectors.gamePlayMode);
    const { field, addedCells } = createInitialGameField(gameSize, gamePlayMode);

    yield put(batchActions([
      setGameSize(gameSize),
      setField(field),
      setAppStatus(AppStatus.InProgress),
      setNewCellsToAnimate(addedCells),
    ]));
  } catch (error) {
    console.warn('Error occurred during changing game size.', error);
  }
}
