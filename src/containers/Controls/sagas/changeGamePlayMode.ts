import { batchActions } from 'redux-batched-actions';
import { put, select } from 'redux-saga/effects';

import { AppStatus } from 'constant';
import { setAppStatus, setGamePlayMode } from 'containers/Controls/actions';
import { setField, setNewCellsToAnimate } from 'containers/GameField/actions';
import { createInitialGameField } from 'utils/createInitialGameField';
import { setGameSize } from '../actions';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* changeGamePlayMode(action: Action.ChangeGamePlayMode) {
  try {
    const confirmed = confirm('Do you want to start a new game in other mode?');
    if (!confirmed) {
      return;
    }

    const { gamePlayMode } = action.payload;
    const gameSize: ReturnSagaType<typeof controlsSelectors.gameSize> = yield select(controlsSelectors.gameSize);
    const { field, addedCells } = createInitialGameField(gameSize, gamePlayMode);

    yield put(batchActions([
      setGameSize(gameSize),
      setField(field),
      setAppStatus(AppStatus.InProgress),
      setGamePlayMode(gamePlayMode),
      setNewCellsToAnimate(addedCells),
    ]));
  } catch (error) {
    console.warn('Error occurred during changing game play mode.', error);
  }
}
