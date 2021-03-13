import { batchActions } from 'redux-batched-actions';
import { put, select } from 'redux-saga/effects';
import { cloneDeep } from 'lodash';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import * as gameFieldSelectors from 'containers/GameField/selectors';
import { setField, setNewCellsToAnimate } from 'containers/GameField/actions';
import { isFieldMovable } from 'utils/isFieldMovable';
import { Action } from '../models';
import { addNewNumbers } from './services/addNewNumbers';

export function* initiateField(action: Action.InitiateField) {
  try {
    // TODO: readonly
    const actualField: ReturnSagaType<typeof gameFieldSelectors.field> = yield select(gameFieldSelectors.field);
    // deep copy of actual field to mutate it
    const field = cloneDeep(actualField);

    const newCells = yield* addNewNumbers(field);
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
