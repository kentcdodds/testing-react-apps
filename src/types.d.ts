declare module 'react-use-geolocation' {
  type Position = {coords: {latitude: number; longitude: number}}
  export function useCurrentPosition(): [
    Position | undefined,
    Error | undefined,
  ]
}

declare module 'import-all.macro' {
  type Mod = {default: object; [string as key]: object}
  const deferred = (glob: string): Record<string, Promise<Mod>> => {}
  const importAll = {deferred}
  export default importAll
}
