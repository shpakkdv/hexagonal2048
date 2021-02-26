import { ActionType } from './constants';
import { ActionCreator } from './models';

export const setField: ActionCreator.SetField = (field) => ({
  type: ActionType.SET_FIELD,
  payload: {
    field,
  },
});

export const setNewCellsToAnimate: ActionCreator.SetNewCellsToAnimate = (cells) => ({
  type: ActionType.SET_NEW_CELLS_TO_ANIMATE,
  payload: {
    cells,
  },
});
