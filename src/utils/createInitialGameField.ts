import type { HexagonArray, RealCell } from 'models';
import { GamePlayMode } from 'constant';
import { addRandomValuesToHexagonArray } from './addRandomValuesToHexagonArray';
import { createAxialHexagonArray } from './createHexagonArray';
import { getValuesToAdd } from './getValuesToAdd';

interface InitialGameField {
  field: HexagonArray;
  addedCells: RealCell[];
}

/**
 * Creates an empty hexagon array and fill its with random numbers.
 * @param gameSize
 * @param gamePlayMode
 */
export function createInitialGameField(gameSize: number, gamePlayMode: GamePlayMode): InitialGameField {
  const field = createAxialHexagonArray(gameSize);
  let addedCells: RealCell[] = [];

  if (gamePlayMode === GamePlayMode.Offline) {
    const valuesToAdd = getValuesToAdd(gameSize);
    addedCells = addRandomValuesToHexagonArray(field, valuesToAdd);
  }

  return {
    field,
    addedCells,
  };
}
