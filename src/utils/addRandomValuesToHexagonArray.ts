import random from 'lodash/random';

import type { CubeRealCell, HexagonArray, RealCell } from 'models';
import { toAxialCell, toCubeCell } from './coordinatesConverter';
import { getEmptyCells, getNonEmptyCells } from './getCells';
import { getRandomCells } from './getRandomCells';

export function addRandomValuesToHexagonArray(field: HexagonArray, valuesToAdd: number[]): RealCell[] {
  const emptyCells = getEmptyCells(field);
  const amountOfValuesToAdd = getAmountOfValuesToAdd(valuesToAdd);
  const randomCells = getRandomCells(emptyCells, amountOfValuesToAdd);

  randomCells.forEach(cell => {
    const [cellIndex, rowIndex] = cell;
    const valueToAdd = valuesToAdd[random(0, valuesToAdd.length - 1)];
    field[rowIndex][cellIndex]![2] = valueToAdd;
  });

  return randomCells;
}

export async function addRandomValuesToHexagonArrayOnline(
  url: string,
  field: HexagonArray,
  gameSize: number,
): Promise<RealCell[]> {
  // do not send request if no places to add new numbers
  if (getEmptyCells(field).length === 0) {
    return [];
  }

  const nonEmptyCells = getNonEmptyCells(field);

  const cubeStringifiedCells = JSON.stringify(nonEmptyCells.map(axialCell => toCubeCell(axialCell, gameSize)));
  const response = await fetch(url, { method: 'POST', body: cubeStringifiedCells });
  const cubeCellsToAdd: CubeRealCell[] = await response.json();
  const axialCellsToAdd = cubeCellsToAdd.map(cubeCell => toAxialCell(cubeCell, gameSize));

  axialCellsToAdd.forEach(cell => {
    const [cellIndex, rowIndex, value] = cell;
    field[rowIndex][cellIndex]![2] = value;
  });

  return axialCellsToAdd;
}

// TODO: create logic
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAmountOfValuesToAdd(valuesToAdd: number[]): number {
  return 2;
}
