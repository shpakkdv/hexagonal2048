import random from 'lodash/random';

import type { HexagonArray } from 'models';
import { getEmptyCells} from './getEmptyCells';
import { getRandomCells } from './getRandomCells';

// TODO: create logic - amountOfValuesToAdd
export function addRandomValuesToHexagonArray(field: HexagonArray, valuesToAdd: number[], amountOfValuesToAdd = 2): void {
  const emptyCells = getEmptyCells(field);
  const randomCells = getRandomCells(emptyCells, amountOfValuesToAdd);

  randomCells.forEach(cell => {
    const [cellIndex, rowIndex] = cell;
    const valueToAdd = valuesToAdd[random(0, valuesToAdd.length - 1)];
    field[rowIndex][cellIndex]![2] = valueToAdd;
  });
}
