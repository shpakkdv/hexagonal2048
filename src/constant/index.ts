// single constants
export const SERVER_URL = 'http://localhost:13337';
export const DEFAULT_CELL_SIZE = 40;
export const CELL_SIZE_RANGE = [3, 250] as const;
export const DEFAULT_GAME_SIZE = 3;
export const GAME_SIZE_RANGE = [2, 20] as const;

// enums
export enum AppStatus {
  InProgress = 'in-progress',
  Finished = 'finished',
}

export enum GameMode {
  Pointy = 'pointy',
  Flat = 'flat',
}

export enum GamePlayMode {
  Online = 'online',
  Offline = 'offline',
}

export enum Direction {
  Bottom = 'bottom',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  Top = 'top',
  TopLeft = 'top-left',
  TopRight = 'top-right',
}

// helpers
export const KeyCodesToHandlePointyMode = ['KeyQ', 'KeyW', 'KeyE', 'KeyA', 'KeyS', 'KeyD'] as const;
type KeyCodeToHandlePointyMode = typeof KeyCodesToHandlePointyMode[number];

export const KeyCodesToHandleFlatMode = ['KeyW', 'KeyE', 'KeyA', 'KeyF', 'KeyS', 'KeyD'] as const;
type KeyCodeToHandleFlatMode = typeof KeyCodesToHandleFlatMode[number];

export const DirectionByKeyPointyMode: Record<KeyCodeToHandlePointyMode, Direction> = {
  KeyE: Direction.TopLeft,
  KeyW: Direction.Top,
  KeyQ: Direction.TopRight,
  KeyD: Direction.BottomLeft,
  KeyS: Direction.Bottom,
  KeyA: Direction.BottomRight,
};

export const DirectionByKeyCodeFlatMode: Record<KeyCodeToHandleFlatMode, Direction> = {
  KeyW: Direction.TopRight,
  KeyE: Direction.BottomRight,
  KeyA: Direction.Top,
  KeyF: Direction.Bottom,
  KeyS: Direction.TopLeft,
  KeyD: Direction.BottomLeft,
};
