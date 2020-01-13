type TimerFn = () => void;

export interface Timer {
  readonly clear: TimerFn;
  readonly pause: TimerFn;
  readonly resume: TimerFn;
  readonly start: TimerFn;
}

const now = (): number => Date.now();

const timer = (
  callback: () => void,
  delay: number,
  autoStart = false,
): Timer => {
  let id: NodeJS.Timeout;
  let start: number;
  let remains: number = delay;
  const clear = (): void => clearTimeout(id);
  const pause: Timer['pause'] = () => {
    clear();
    remains -= now() - start;
  };
  const resume: Timer['resume'] = () => {
    start = now();
    clear();
    id = setTimeout(callback, remains);
  };
  if (autoStart) resume();
  return { clear, pause, resume, start: resume };
};

export default timer;
