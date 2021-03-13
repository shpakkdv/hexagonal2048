import { clamp } from 'lodash';

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
): Readonly<LocationGameInfo> | undefined {
  if (location.parsed) {
    return getLocationGameInfo();
  }

  const testHashPrefix = '#test';
  const { hash } = window.location;

  if (hash.startsWith(testHashPrefix)) {
    (window as any).TEST_MODE = true;

    const parsedGameSize = parseInt(hash.replace(testHashPrefix, ''));
    const gameSize = isNaN(parsedGameSize) ? defaultGameSize : clamp(parsedGameSize, ...gameSizeRange);
    location.parsed = true;
    location.gameSize = gameSize;

    return getLocationGameInfo();
  }
}

export function getLocationGameInfo(): Readonly<LocationGameInfo> | undefined {
  if (!location.parsed) {
    return;
  }

  return location;
}

export function resetLocationGameInfo(): void {
  window.location.hash = '';
  location.parsed = false;
}

