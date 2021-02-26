import type { AppState, IAction, HexagonArray, RealCell } from 'models';

export type State = AppState['gameField'];

export namespace Payload {
  export interface SetField {
    field: HexagonArray;
  }
  export interface SetNewCellsToAnimate {
    cells: RealCell[];
  }
}

export namespace Action {
  export type SetField = IAction<Payload.SetField>;
  export type SetNewCellsToAnimate = IAction<Payload.SetNewCellsToAnimate>;
}

export namespace ActionCreator {
  export type SetField = (field: HexagonArray) => Action.SetField;
  export type SetNewCellsToAnimate = (cells: RealCell[]) => Action.SetNewCellsToAnimate;
}
