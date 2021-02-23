import random from 'lodash/random';

import type { CubeRealCell, HexagonArray } from 'models';
import { toAxialCell, toCubeCell } from './coordinatesConverter';
import { getEmptyCells, getNonEmptyCells } from './getCells';
import { getRandomCells } from './getRandomCells';

export function addRandomValuesToHexagonArray(field: HexagonArray, valuesToAdd: number[]): void {
  const emptyCells = getEmptyCells(field);
  const amountOfValuesToAdd = getAmountOfValuesToAdd(valuesToAdd);
  const randomCells = getRandomCells(emptyCells, amountOfValuesToAdd);

  randomCells.forEach(cell => {
    const [cellIndex, rowIndex] = cell;
    const valueToAdd = valuesToAdd[random(0, valuesToAdd.length - 1)];
    field[rowIndex][cellIndex]![2] = valueToAdd;
  });
}

export async function addRandomValuesToHexagonArrayOnline(url: string, field: HexagonArray, gameSize: number): Promise<void> {
  const nonEmptyCells = getNonEmptyCells(field);

  // TODO
  // if (nonEmptyCells.length === amountOfRealCells) {
  //   return;
  // }

  const cubeStringifiedCells = JSON.stringify(nonEmptyCells.map(axialCell => toCubeCell(axialCell, gameSize)));
  const response = await fetch(url, { method: 'POST', body: cubeStringifiedCells });
  const cubeCellsToAdd: CubeRealCell[] = await response.json();
  const axialCellsToAdd = cubeCellsToAdd.map(cubeCell => toAxialCell(cubeCell, gameSize));

  axialCellsToAdd.forEach(cell => {
    const [cellIndex, rowIndex, value] = cell;
    field[rowIndex][cellIndex]![2] = value;
  });
}

// TODO: create logic
function getAmountOfValuesToAdd(valuesToAdd: number[]): number {
  return 2;
}
