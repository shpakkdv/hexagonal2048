import { clamp, cloneDeep } from 'lodash';

interface LocationGameInfo {
  parsed: boolean;
  gameSize: number,
}

const location: LocationGameInfo = {
  parsed: false,
  gameSize: 0,
};

export function parseLocation(
  defaultGameSize: number,
  gameSizeRange: readonly [number, number],
): LocationGameInfo | undefined {
  if (location.parsed) {
    return getLocationGameInfo();
  }

  const testHashPrefix = '#test';
  const { hash } = window.location;

  if (hash.startsWith(testHashPrefix)) {
    const parsedGameSize = parseInt(hash.replace(testHashPrefix, ''));
    const gameSize = isNaN(parsedGameSize) ? defaultGameSize : clamp(parsedGameSize, ...gameSizeRange);
    location.parsed = true;
    location.gameSize = gameSize;

    return getLocationGameInfo();
  }
}

export function getLocationGameInfo(): LocationGameInfo | undefined {
  if (!location.parsed) {
    return;
  }

  return cloneDeep(location);
}

export function resetLocationGameInfo(): void {
  window.location.hash = '';
  location.parsed = false;
}

