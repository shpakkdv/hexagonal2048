export function getServerUrl(serverUrl: string, gameSize: number): string {
  return new URL(String(gameSize), (window as any).RNG_SERVER_URL || serverUrl).href;
}
