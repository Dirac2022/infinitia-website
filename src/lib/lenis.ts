import type Lenis from 'lenis';

let _instance: Lenis | null = null;

export const lenisRef = {
  get current(): Lenis | null { return _instance; },
  set current(v: Lenis | null) { _instance = v; },
};
