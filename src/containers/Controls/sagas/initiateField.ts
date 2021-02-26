import { batchActions } from 'redux-batched-actions';
import { call, put, select } from 'redux-saga/effects';
import { cloneDeep } from 'lodash';

import { AppStatus, GamePlayMode } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import * as gameFieldSelectors from 'containers/GameField/selectors';
import { setField, setNewCellsToAnimate } from 'containers/GameField/actions';
import type { RealCell } from 'models';
import { addRandomValuesToHexagonArray, addRandomValuesToHexagonArrayOnline } from 'utils/addRandomValuesToHexagonArray';
import { isFieldMovable } from 'utils/isFieldMovable';
import { getServerUrl } from 'utils/getServerUrl';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* initiateField(action: Action.InitiateField) {
  try {
    const gamePlayMode: ReturnSagaType<typeof controlsSelectors.gamePlayMode> = yield select(controlsSelectors.gamePlayMode);
    // TODO: readonly
    const actualField: ReturnSagaType<typeof gameFieldSelectors.field> = yield select(gameFieldSelectors.field);
    // deep copy of actual field to mutate it
    const field = cloneDeep(actualField);

    let newCells: RealCell[];
    // add new numbers
    if (gamePlayMode === GamePlayMode.Online) {
      const gameSize: ReturnSagaType<typeof controlsSelectors.gameSize> = yield select(controlsSelectors.gameSize);

      try {
        newCells = yield call(addRandomValuesToHexagonArrayOnline, getServerUrl(gameSize), field, gameSize);
      } catch {
        alert('The server is currently not available. Please select offline play mode.');
        return;
      }
    } else {
      const valuesToAdd: ReturnSagaType<typeof controlsSelectors.valuesToAdd> = yield select(controlsSelectors.valuesToAdd);
      newCells = addRandomValuesToHexagonArray(field, valuesToAdd);
    }

    const isGameFinished = !isFieldMovable(field);

    yield put(batchActions([
      setField(field),
      setNewCellsToAnimate(newCells),
      ...(isGameFinished ? [setAppStatus(AppStatus.Finished)] : []),
    ]));
  } catch (error) {
    console.warn('Error occurred during initiation the field.', error);
  }
}
