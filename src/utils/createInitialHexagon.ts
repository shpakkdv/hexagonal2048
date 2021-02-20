import type { Cell, HexagonArray } from 'models';
import { addRandomValuesToHexagonArray} from './addRandomValuesToHexagonArray';
import { createEmptyHexagon} from './createEmptyHexagon';
import { getEmptyCells} from './getEmptyCells';
import { getRandomCells } from './getRandomCells';
import { getValuesToAdd } from './getValuesToAdd';

/**
 * Creates an empty hexagon array and fill its with random numbers.
 * @param gameSize
 */
export function createInitialHexagon(gameSize: number): HexagonArray {
  const field = createEmptyHexagon(gameSize);
  const valuesToAdd = getValuesToAdd(gameSize);
  addRandomValuesToHexagonArray(field, valuesToAdd);

  return field;
}
