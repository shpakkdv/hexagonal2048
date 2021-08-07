import { Reducer } from 'redux';

import { IAction } from 'models';
import { createInitialGameField } from 'utils/createInitialGameField';
import { getDefaultGameInfo } from 'utils/getDefaultGameInfo';
import { ActionType } from './constants';
import { State, Action } from './models';

const { gameSize, gamePlayMode } = getDefaultGameInfo();
const { field, addedCells } = createInitialGameField(gameSize, gamePlayMode);

const initialState: State = {
  field,
  animation: {
    appearedCells: addedCells,
  },
};

const reducer: Reducer<State, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FIELD:
      return setField(state, action);
    case ActionType.SET_NEW_CELLS_TO_ANIMATE:
      return setNewCellsToAnimate(state, action);

    default:
      return state;
  }
};

export default reducer;

export const setField: Reducer<State, Action.SetField> = (state, { payload: { field } }) => ({
  ...state!,
  field,
});

export const setNewCellsToAnimate: Reducer<State, Action.SetNewCellsToAnimate> = (state, { payload: { cells } }) => ({
  ...state!,
  animation: {
    ...state?.animation,
    appearedCells: cells,
  },
});
