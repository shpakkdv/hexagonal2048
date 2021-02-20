// single constants
export const DEFAULT_GAME_SIZE = 3;
export const DEFAULT_CELL_SIZE = 40;

// enums
export enum AppStatus {
  InProgress = 'in-progress',
  Finished = 'finished',
}

export enum GameMode {
  Pointy = 'pointy',
  Flat = 'flat',
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
  KeyQ: Direction.TopLeft,
  KeyW: Direction.Top,
  KeyE: Direction.TopRight,
  KeyA: Direction.BottomLeft,
  KeyS: Direction.Bottom,
  KeyD: Direction.BottomRight,
};

export const DirectionByKeyCodeFlatMode: Record<KeyCodeToHandleFlatMode, Direction> = {
  KeyW: Direction.TopRight,
  KeyE: Direction.BottomRight,
  KeyA: Direction.Top,
  KeyF: Direction.Bottom,
  KeyS: Direction.TopLeft,
  KeyD: Direction.BottomLeft,
};
