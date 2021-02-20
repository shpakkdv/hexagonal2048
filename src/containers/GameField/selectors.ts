import { AppState } from 'models';

const gameField = (state: AppState) => state.gameField;

export const field = (state: AppState) => gameField(state).field;
