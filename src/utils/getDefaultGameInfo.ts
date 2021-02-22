import { DEFAULT_GAME_SIZE, GAME_SIZE_RANGE, GamePlayMode } from 'constant';
import { parseLocation } from './parseLocation';

interface DefaultGameInfo {
  gamePlayMode: GamePlayMode;
  gameSize: number;
}

export function getDefaultGameInfo(): DefaultGameInfo {
  const locationGameInfo = parseLocation(DEFAULT_GAME_SIZE, GAME_SIZE_RANGE);

  if (locationGameInfo) {
    return {
      gamePlayMode: GamePlayMode.Online,
      gameSize: locationGameInfo.gameSize,
    };
  }

  return {
    gamePlayMode: GamePlayMode.Offline,
    gameSize: DEFAULT_GAME_SIZE,
  };
}

