import { batchActions } from 'redux-batched-actions';
import { put, select } from 'redux-saga/effects';
import { cloneDeep, isEqual } from 'lodash';

import { AppStatus } from 'constant';
import { setAppStatus } from 'containers/Controls/actions';
import * as gameFieldSelectors from 'containers/GameField/selectors';
import { setField, setNewCellsToAnimate } from 'containers/GameField/actions';
import { isFieldMovable } from 'utils/isFieldMovable';
import { moveField } from 'utils/moveField';
import { Action } from '../models';
import * as controlsSelectors from '../selectors';
import { addNewNumbers } from './services/addNewNumbers';

export function* move(action: Action.Move) {
  try {
    const appStatus: ReturnSagaType<typeof controlsSelectors.appStatus> = yield select(controlsSelectors.appStatus);

    if (appStatus === AppStatus.Finished) {
      return;
    }

    // TODO: readonly
    const actualField: ReturnSagaType<typeof gameFieldSelectors.field> = yield select(gameFieldSelectors.field);
    // deep copy of actual field to mutate it
    const field = cloneDeep(actualField);
    const { direction } = action.payload;

    moveField(actualField, field, direction);

    if (isEqual(actualField, field)) {
      console.log('There are no any moves in this direction. Choose another one, please.');
      return;
    }

    const newCells = yield* addNewNumbers(field);
    const isGameFinished = !isFieldMovable(field);

    yield put(batchActions([
      setField(field),
      setNewCellsToAnimate(newCells),
      ...(isGameFinished ? [setAppStatus(AppStatus.Finished)] : []),
    ]));

    !(window as any).TEST_MODE && isGameFinished && alert('No more possible moves!');
  } catch (error) {
    console.warn('Error occurred during moving.', error);
  }
}
