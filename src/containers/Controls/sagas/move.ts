import { batchActions } from 'redux-batched-actions';
import { put, select } from 'redux-saga/effects';
import { cloneDeep } from 'lodash';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import * as gameFieldSelectors from 'containers/GameField/selectors';
import { setField } from 'containers/GameField/actions';
import { addRandomValuesToHexagonArray } from 'utils/addRandomValuesToHexagonArray';
import { isFieldMovable } from 'utils/isFieldMovable';
import { moveField } from 'utils/moveField';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';

export function* move(action: Action.Move) {
  try {
    const appStatus: ReturnSagaType<typeof controlsSelectors.appStatus> = yield select(controlsSelectors.appStatus);

    if (appStatus === AppStatus.Finished) {
      return;
    }

    const { direction } = action.payload;
    const valuesToAdd: ReturnSagaType<typeof controlsSelectors.valuesToAdd> = yield select(controlsSelectors.valuesToAdd);
    // TODO: readonly
    const actualField: ReturnSagaType<typeof gameFieldSelectors.field> = yield select(gameFieldSelectors.field);
    // deep copy of actual field to mutate it
    const field = cloneDeep(actualField);

    moveField(actualField, field, direction);
    addRandomValuesToHexagonArray(field, valuesToAdd);

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
