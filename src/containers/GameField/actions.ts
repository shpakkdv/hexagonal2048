import { ActionType } from './constants';
import { ActionCreator } from './models';

export const setField: ActionCreator.SetField = (field) => ({
  type: ActionType.SET_FIELD,
  payload: {
    field,
  },
});
