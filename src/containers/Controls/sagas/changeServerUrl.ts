import { batchActions } from 'redux-batched-actions';
import { put, select } from 'redux-saga/effects';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import { setField, setNewCellsToAnimate } from 'containers/GameField/actions';
import { createInitialGameField } from 'utils/createInitialGameField';
import { setUrl } from '../actions';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* changeServerUrl(action: Action.ChangeServerUrl) {
  try {
    if (!(window as any).TEST_MODE) {
      const confirmed = confirm('Do you want to start a new game with data from another server?');
      if (!confirmed) {
        return;
      }
    }

    const { url } = action.payload;
    const gamePlayMode: ReturnSagaType<typeof controlsSelectors.gamePlayMode> = yield select(controlsSelectors.gamePlayMode);
    const gameSize: ReturnSagaType<typeof controlsSelectors.gameSize> = yield select(controlsSelectors.gameSize);
    const { field, addedCells } = createInitialGameField(gameSize, gamePlayMode);

    yield put(batchActions([
      setUrl(url),
      setField(field),
      setAppStatus(AppStatus.InProgress),
      setNewCellsToAnimate(addedCells),
    ]));
  } catch (error) {
    console.warn('Error occurred during changing server url.', error);
  }
}
