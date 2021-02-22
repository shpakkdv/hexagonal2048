import type { HexagonArray, RealCell } from 'models';

/**
 * Returns an array of empty cells in hexagonArray
 * @param hexagonArray
 */
export function getEmptyCells(hexagonArray: HexagonArray): RealCell[] {
  return hexagonArray.map(row => row.filter(cell => cell && !cell[2]) as RealCell[]).flat(1);
}

/**
 * Returns an array of non empty cells in hexagonArray
 * @param hexagonArray
 */
export function getNonEmptyCells(hexagonArray: HexagonArray): RealCell[] {
  return hexagonArray.map(row => row.filter(cell => cell && !!cell[2]) as RealCell[]).flat(1);
}
