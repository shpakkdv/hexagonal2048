import { Reducer } from 'redux';

import { DEFAULT_GAME_SIZE } from 'constant';
import { IAction } from 'models';
import { createInitialHexagon } from 'utils/createInitialHexagon';
import { ActionType } from './constants';
import { State, Action } from './models';

const initialState: State = {
  field: createInitialHexagon(DEFAULT_GAME_SIZE),
};

const reducer: Reducer<State, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FIELD:
      return setField(state, action);

    default:
      return state;
  }
};

export default reducer;

export const setField: Reducer<State, Action.SetField> = (state, { payload: { field } }) => ({
  ...state,
  field,
});
