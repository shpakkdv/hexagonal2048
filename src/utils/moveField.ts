import { Direction } from 'constant';
import type { Cell, GetDirectionRow, HexagonArray } from 'models';
import { moveCell } from './moveCell';

// TODO: reuse some logic
export function moveField(
  actualField: HexagonArray,
  field: HexagonArray,
  direction: Direction,
): void {
  const { length } = field;

  // bottom
  if (direction === Direction.Bottom) {
    const getDirectionRow: GetDirectionRow = (field, r, q) => field[r];

    for (let q = length - 1; q >= 0; q--) {
      for (let r = 0; r < length; r++) {
        moveCell(actualField, field, r, q, getDirectionRow);
      }
    }
  }

  // bottom reverse
  if (direction === Direction.Top) {
    const getDirectionRow: GetDirectionRow = (field, r, q) => field[r].slice().reverse();

    for (let q = 0; q < length; q++) {
      for (let r = 0; r < length; r++) {
        moveCell(actualField, field, r, q, getDirectionRow);
      }
    }
  }

  // bottom-left
  if (direction === Direction.BottomLeft) {
    const getDirectionRow: GetDirectionRow = (field, r, q) => field.map(row => row[q]);

    for (let q = 0; q < length; q++) {
      for (let r = length - 1; r >= 0; r--) {
        moveCell(actualField, field, r, q, getDirectionRow);
      }
    }
  }

  // bottom-left reverse
  if (direction === Direction.TopRight) {
    const getDirectionRow: GetDirectionRow = (field, r, q) => field.map(row => row[q]).reverse();

    for (let q = 0; q < length; q++) {
      for (let r = 0; r < length; r++) {
        moveCell(actualField, field, r, q, getDirectionRow);
      }
    }
  }

  // bottom-right
  if (direction === Direction.BottomRight) {
    const getDirectionRow: GetDirectionRow = (field, r, q) => field.reduce((acc, row) => {
      row.forEach(cell => {
        if (!cell) {
          return;
        }

        const [Q, R] = cell;
        if (r + q === Q + R) {
          acc.push(cell);
        }
      });

      return acc;
    }, [] as Cell[]);
    const getDirectionRowReversed: GetDirectionRow = (...args) => getDirectionRow(...args).reverse();

    const firstRow = field[0];
    const lastColumn = field.map(row => row[length - 1]).slice(1);

    const diagonalCells = [...firstRow, ...lastColumn].filter(Boolean);
    const cellsToIterate = diagonalCells.map(cell => getDirectionRow(field, cell![1], cell![0])).flat();

    cellsToIterate.forEach(cell => {
      moveCell(actualField, field, cell![1], cell![0], getDirectionRowReversed);
    })
  }

  // bottom-right reverse
  if (direction === Direction.TopLeft) {
    const getDirectionRow: GetDirectionRow = (field, r, q) => field.reduce((acc, row) => {
      row.forEach(cell => {
        if (!cell) {
          return;
        }

        const [Q, R] = cell;
        if (r + q === Q + R) {
          acc.push(cell);
        }
      });

      return acc;
    }, [] as Cell[]);
    const getDirectionRowReversed: GetDirectionRow = (...args) => getDirectionRow(...args).reverse();

    const firstColumn = field.map(row => row[0]);
    const lastRow = field[length - 1].slice(1);

    const diagonalCells = [...firstColumn, ...lastRow].filter(Boolean);
    const cellsToIterate = diagonalCells.map(cell => getDirectionRowReversed(field, cell![1], cell![0])).flat();

    cellsToIterate.forEach(cell => {
      moveCell(actualField, field, cell![1], cell![0], getDirectionRow);
    })
  }
}
