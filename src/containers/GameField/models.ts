import { AppState, IAction, HexagonArray } from 'models';

export type State = AppState['gameField'];

export namespace Payload {
  export interface SetField {
    field: HexagonArray;
  }
}

export namespace Action {
  export type SetField = IAction<Payload.SetField>;
}

export namespace ActionCreator {
  export type SetField = (field: HexagonArray) => Action.SetField;
}
