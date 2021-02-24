import { SERVER_URL } from 'constant';

export function getServerUrl(gameSize: number): string {
  return new URL(String(gameSize), (window as any).RNG_SERVER_URL || SERVER_URL).href;
}
