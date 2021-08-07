import { call, select } from 'redux-saga/effects';

import { GamePlayMode } from 'constant';
import type { HexagonArray, RealCell } from 'models';
import { addRandomValuesToHexagonArray, addRandomValuesToHexagonArrayOnline } from 'utils/addRandomValuesToHexagonArray';
import { getServerUrl } from 'utils/getServerUrl';
import * as controlsSelectors from '../../selectors';

export function* addNewNumbers(field: HexagonArray): Generator<unknown, RealCell[], any> {
  const gamePlayMode: ReturnSagaType<typeof controlsSelectors.gamePlayMode> = yield select(controlsSelectors.gamePlayMode);

  let newCells: RealCell[];
  if (gamePlayMode === GamePlayMode.Online) {
    const url: ReturnSagaType<typeof controlsSelectors.url> = yield select(controlsSelectors.url);
    const gameSize: ReturnSagaType<typeof controlsSelectors.gameSize> = yield select(controlsSelectors.gameSize);

    try {
      newCells = yield call(addRandomValuesToHexagonArrayOnline, getServerUrl(url, gameSize), field, gameSize);
    } catch {
      alert('The server is currently not available. Please select offline play mode.');
      throw new Error('The server is currently not available.');
    }
  } else {
    const valuesToAdd: ReturnSagaType<typeof controlsSelectors.valuesToAdd> = yield select(controlsSelectors.valuesToAdd);
    newCells = addRandomValuesToHexagonArray(field, valuesToAdd);
  }
  console.log(JSON.stringify(newCells));

  return newCells;
}
