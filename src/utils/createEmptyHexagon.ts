import type { Cell, HexagonArray } from 'models';

/**
 * Creates two-dimensional array `n * n` - representation of the hexagon.
 * Fake cells are `null`. Real cells are `tuples`: `[q - rowIndex, r - cellIndex, value - null]`.
 * @example createEmptyHexagon(2) returns
 * [
 *   [ null        , [1, 0, null], [2, 0, null] ],
 *   [ [0, 1, null], [1, 1, null], [2, 1, null] ],
 *   [ [0, 2, null], [1, 2, null], null         ],
 * ]
 * @param size - hexagon size (items radius)
 */
export function createEmptyHexagon(size: number): HexagonArray {
  const arrayLength = 2 * size - 1;
  const halfArrayLength = Math.floor(arrayLength / 2);

  return Array.from<Cell[]>({ length: arrayLength }).map((_, index1) => Array.from<Cell>({ length: arrayLength }).map((_, index2) => {
    if (index1 < halfArrayLength && halfArrayLength > index2 + index1) {
      return null;
    }

    if (index1 > halfArrayLength && arrayLength <= index1 + index2 - halfArrayLength) {
      return null;
    }

    return [index2, index1, null];
  }));
}
