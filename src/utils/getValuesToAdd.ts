/**
 * Creates an array of values than can be added depending on the game size
 * @example [2, 4, 8, ...]
 * @param gameSize - hexagon size (items radius)
 */
export function getValuesToAdd(gameSize: number): number[] {
  return Array.from<number>({ length: Math.max(2, gameSize - 2) }).map((_, index) => 2 ** index).slice(1);
}

// function countHexItems(n: number) {
//   return (n ** 2) * 3 - n * 3 + 1;
// }
