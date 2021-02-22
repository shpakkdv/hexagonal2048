import { Reducer } from 'redux';

import { IAction } from 'models';
import { createInitialGameField } from 'utils/createInitialGameField';
import { getDefaultGameInfo } from 'utils/getDefaultGameInfo';
import { ActionType } from './constants';
import { State, Action } from './models';

const { gameSize, gamePlayMode } = getDefaultGameInfo();

const initialState: State = {
  field: createInitialGameField(gameSize, gamePlayMode),
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
