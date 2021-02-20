import { all, Effect } from 'redux-saga/effects';

import controlsSagas from 'containers/Controls/sagas';

export default function* rootSaga() {
  const effects: Effect[] = [
    ...controlsSagas,
  ];

  yield all(effects);
}
