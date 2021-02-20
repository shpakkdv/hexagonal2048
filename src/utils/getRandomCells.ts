import random from 'lodash/random';

import type { Cell } from 'models';

/**
 * Returns an array of random cells in hexagonArray
 * @param cells
 * @param amount - amount of cells to return
 */
export function getRandomCells<T extends Cell[]>(cells: T, amount: number): T {
  const { length } = cells;

  if (length <= amount) {
    return cells;
  }

  const randomIndexes = new Set<number>();
  while (randomIndexes.size < amount) {
    randomIndexes.add(random(0, length - 1));
  }

  return Array.from(randomIndexes).map(cellIndex => cells[cellIndex]) as T;
}
