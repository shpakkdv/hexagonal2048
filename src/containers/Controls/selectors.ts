import { AppState } from 'models';

const controls = (state: AppState) => state.controls;

export const gameSize = (state: AppState) => controls(state).gameSize;
export const valuesToAdd = (state: AppState) => controls(state).valuesToAdd;
export const gameMode = (state: AppState) => controls(state).gameMode;
export const gamePlayMode = (state: AppState) => controls(state).gamePlayMode;
export const appStatus = (state: AppState) => controls(state).appStatus;
export const cellSize = (state: AppState) => controls(state).cellSize;
