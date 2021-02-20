import type { GetDirectionRow, HexagonArray } from 'models';

// TODO: types, logs and clean up the code
/**
 * Move a cell according to 2048 game rules.
 * NOTE: mutates `field` array.
 * @param actualField - hexagon array before mutations
 * @param field - current hexagon array that is being mutated
 * @param r - cellIndex
 * @param q - rowIndex
 */
export function moveCell(
  actualField: HexagonArray,
  field: HexagonArray,
  r: number,
  q: number,
  getDirectionRow: GetDirectionRow,
): void {
  const row = field[r];
  const cell = row[q];

  if (!cell) {
    return;
  }

  const [,, value] = cell;

  if (!value) {
    return;
  }

  // console.groupCollapsed('CELL', cell)

  // find actual row
  const actualDirectionRow = getDirectionRow(actualField, r, q); // readonly
  const directionRow = getDirectionRow(field, r, q);

  const cellIndexInDirectionRow = directionRow.indexOf(cell);
  const actualDirectionRowPart = actualDirectionRow.slice(cellIndexInDirectionRow + 1);
  const directionRowPart = directionRow.slice(cellIndexInDirectionRow + 1); // TODO: revise
  const nextCellInDirectionRow = directionRow[cellIndexInDirectionRow + 1];
  const isLast = cellIndexInDirectionRow === directionRow.length - 1 || !nextCellInDirectionRow;
  const isNextCellDifferent = nextCellInDirectionRow?.[2] !== null && nextCellInDirectionRow?.[2] !== value;
  // console.log('isLast', isLast, directionRow, cell);
  // console.log('isNextCellDifferent', isNextCellDifferent, nextCellInDirectionRow);
  // console.groupEnd();

  if (isLast || isNextCellDifferent) {
    return;
  }

  const firstNonEmptyCell = directionRowPart.find(cell => cell && !!cell[2]);
  // console.log('--------firstNonEmptyCell', firstNonEmptyCell);

  if (firstNonEmptyCell) {
    const actualFirstNonEmptyCell = actualDirectionRowPart.find(cell => cell && !!cell[2]);
    const [,, actualNonEmptyValue] = actualFirstNonEmptyCell || [];
    const [,, nonEmptyValue] = firstNonEmptyCell;
    // console.log('firstNonEmptyCell', firstNonEmptyCell);

    if (nonEmptyValue === value && actualNonEmptyValue === value) {
      firstNonEmptyCell[2]! += value;
      cell[2] = null;
    } else {
      const firstNonEmptyCellIndex = directionRow.indexOf(firstNonEmptyCell);
      directionRow[firstNonEmptyCellIndex - 1]![2]! += value;
      cell[2] = null;
    }

    return;
  }

  const lastEmptyCell = directionRowPart.slice().reverse().find(cell => cell && !cell[2])!;
  // console.log('**********lastEmptyCell', lastEmptyCell);
  lastEmptyCell[2] = value;
  cell[2] = null;

  // console.log('****', directionRow)
}
