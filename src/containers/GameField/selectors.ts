import { AppState } from 'models';

const gameField = (state: AppState) => state.gameField;

export const field = (state: AppState) => gameField(state).field;
export const appearedCells = (state: AppState) => gameField(state).animation.appearedCells;
