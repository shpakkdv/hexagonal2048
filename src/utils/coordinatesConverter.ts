import type { RealCell, CubeRealCell } from 'models';

export function toCubeCell(cell: RealCell, gameSize: number): CubeRealCell {
  const [q, r, value] = cell;
  const x = q + 1 - gameSize;
  const z = r + 1 - gameSize;
  const y = - x - z;

  return { x, y, z, value };
}

export function toAxialCell(cell: CubeRealCell, gameSize: number): RealCell {
  const { x, z, value } = cell;

  const q = x + gameSize - 1;
  const r = z + gameSize - 1;

  return [q, r, value];
}
