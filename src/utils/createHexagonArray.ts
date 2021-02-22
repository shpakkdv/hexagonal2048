import type { HexagonArray, HexagonCubeArray } from 'models';

/**
 * Creates two-dimensional array `n * n` - representation of the hexagon in axial coordinates.
 * Fake cells are `null`. Real cells are `tuples`: `[q - rowIndex, r - cellIndex, value - null]`.
 * @example createAxialHexagonArray(2) returns
 * [
 *   [     null    , [1, 0, null], [2, 0, null] ],
 *   [ [0, 1, null], [1, 1, null], [2, 1, null] ],
 *   [ [0, 2, null], [1, 2, null],      null    ],
 * ]
 * @param size - hexagon size (items radius)
 */
export function createAxialHexagonArray(size: number): HexagonArray {
  const arrayLength = 2 * size - 1;
  const halfArrayLength = Math.floor(arrayLength / 2);

  return Array.from({ length: arrayLength }).map((_, index1) => Array.from({ length: arrayLength }).map((_, index2) => {
    if (index1 < halfArrayLength && halfArrayLength > index2 + index1) {
      return null;
    }

    if (index1 > halfArrayLength && arrayLength <= index1 + index2 - halfArrayLength) {
      return null;
    }

    return [index2, index1, null];
  }));
}

/**
 * Creates two-dimensional array `n * n` - representation of the hexagon in cube coordinates.
 * Fake cells are `null`. Real cells are objects: `{ x: 0, y: 1, z: -1, value: 4 }`.
 * @example createCubeHexagonArray(2) returns
 * [
 *   [                null               , { x: 0, y: 1,  z: -1, value: null }, { x: 1, y: 0,  z: -1, value: null } ],
 *   [ { x: -1, y: 1, z: 0, value: null }, { x: 0, y: 0,  z: 0,  value: null }, { x: 1, y: -1, z: 0,  value: null } ],
 *   [ { x: -1, y: 0, z: 1, value: null }, { x: 0, y: -1, z: 1,  value: null },                 null                ],
 * ]
 * @param size - hexagon size (items radius)
 */
export function createCubeHexagonArray(size: number): HexagonCubeArray {
  const arrayLength = 2 * size - 1;
  const halfArrayLength = Math.floor(arrayLength / 2);

  return Array.from({ length: arrayLength }).map((_, index1) => Array.from({ length: arrayLength }).map((_, index2) => {
    if (index1 < halfArrayLength && halfArrayLength > index2 + index1) {
      return null;
    }

    if (index1 > halfArrayLength && arrayLength <= index1 + index2 - halfArrayLength) {
      return null;
    }

    const x = index2 + 1 - size;
    const z = index1 + 1 - size;
    const y = - x - z;

    return { x, y, z, value: null };
  }));
}
