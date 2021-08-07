import type { RealCell, CubeRealCell } from 'models';

export function toCubeCell(cell: RealCell, gameSize: number): CubeRealCell {
  const [q, r, value] = cell;
  const z = q + 1 - gameSize;
  const x = r + 1 - gameSize;
  const y = -x - z;

  return { x, y, z, value };
}

export function toAxialCell(cell: CubeRealCell, gameSize: number): RealCell {
  const { x, z, value } = cell;

  const q = z + gameSize - 1;
  const r = x + gameSize - 1;

  return [q, r, value];
}
