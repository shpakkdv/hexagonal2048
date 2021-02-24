import { batchActions } from 'redux-batched-actions';
import { call, put, select } from 'redux-saga/effects';
import { cloneDeep } from 'lodash';

import { AppStatus, GamePlayMode } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import * as gameFieldSelectors from 'containers/GameField/selectors';
import { setField } from 'containers/GameField/actions';
import { addRandomValuesToHexagonArray, addRandomValuesToHexagonArrayOnline } from 'utils/addRandomValuesToHexagonArray';
import { isFieldMovable } from 'utils/isFieldMovable';
import { moveField } from 'utils/moveField';
import { getServerUrl } from 'utils/getServerUrl';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* move(action: Action.Move) {
  try {
    const appStatus: ReturnSagaType<typeof controlsSelectors.appStatus> = yield select(controlsSelectors.appStatus);

    if (appStatus === AppStatus.Finished) {
      return;
    }

    const gamePlayMode: ReturnSagaType<typeof controlsSelectors.gamePlayMode> = yield select(controlsSelectors.gamePlayMode);
    // TODO: readonly
    const actualField: ReturnSagaType<typeof gameFieldSelectors.field> = yield select(gameFieldSelectors.field);
    // deep copy of actual field to mutate it
    const field = cloneDeep(actualField);
    const { direction } = action.payload;

    moveField(actualField, field, direction);

    // add new numbers
    if (gamePlayMode === GamePlayMode.Online) {
      const gameSize: ReturnSagaType<typeof controlsSelectors.gameSize> = yield select(controlsSelectors.gameSize);

      try {
        yield call(addRandomValuesToHexagonArrayOnline, getServerUrl(gameSize), field, gameSize);
      } catch {
        alert('The server is currently not available. Please select offline play mode.');
        return;
      }
    } else {
      const valuesToAdd: ReturnSagaType<typeof controlsSelectors.valuesToAdd> = yield select(controlsSelectors.valuesToAdd);
      addRandomValuesToHexagonArray(field, valuesToAdd);
    }

    const isGameFinished = !isFieldMovable(field);

    yield put(batchActions([
      setField(field),
      ...(isGameFinished ? [setAppStatus(AppStatus.Finished)] : []),
    ]));

    isGameFinished && alert('No more possible moves!');
  } catch (error) {
    console.warn('Error occurred during moving.', error);
  }
}
