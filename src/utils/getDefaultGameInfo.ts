import { DEFAULT_GAME_SIZE, GAME_SIZE_RANGE, GamePlayMode, LOCAL_SERVER_URL, REMOTE_HTTPS_SERVER_URL } from 'constant';
import { parseLocation } from './parseLocation';

interface DefaultGameInfo {
  gamePlayMode: GamePlayMode;
  gameSize: number;
  url: string;
}

export function getDefaultGameInfo(): DefaultGameInfo {
  const locationGameInfo = parseLocation(DEFAULT_GAME_SIZE, GAME_SIZE_RANGE);

  if (locationGameInfo) {
    return {
      gamePlayMode: GamePlayMode.Online,
      gameSize: locationGameInfo.gameSize,
      url: LOCAL_SERVER_URL,
    };
  }

  return {
    gamePlayMode: GamePlayMode.Offline,
    gameSize: DEFAULT_GAME_SIZE,
    url: REMOTE_HTTPS_SERVER_URL,
  };
}
