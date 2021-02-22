import type { HexagonArray } from 'models';
import { GamePlayMode } from 'constant';
import { addRandomValuesToHexagonArray} from './addRandomValuesToHexagonArray';
import { createAxialHexagonArray} from './createHexagonArray';
import { getValuesToAdd } from './getValuesToAdd';

/**
 * Creates an empty hexagon array and fill its with random numbers.
 * @param gameSize
 * @param gamePlayMode
 */
export function createInitialGameField(gameSize: number, gamePlayMode: GamePlayMode): HexagonArray {
  const field = createAxialHexagonArray(gameSize);

  if (gamePlayMode === GamePlayMode.Offline) {
    const valuesToAdd = getValuesToAdd(gameSize);
    addRandomValuesToHexagonArray(field, valuesToAdd);
  }

  return field;
}
