type TimerFn<T = void> = () => T;

export interface Timer {
  readonly clear: TimerFn;
  readonly pause: TimerFn<number>;
  readonly remains: TimerFn<number>;
  readonly resume: TimerFn;
  readonly restart: TimerFn;
  readonly running: TimerFn<boolean>;
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
  let remains = delay;
  let running = false;
  const clear = (): void => clearTimeout(id);
  const pause: Timer['pause'] = () => {
    clear();
    running = false;
    remains -= now() - start;
    return remains;
  };
  const resume: Timer['resume'] = () => {
    start = now();
    clear();
    id = setTimeout(callback, remains);
    running = true;
  };
  const restart: Timer['restart'] = () => {
    remains = delay;
    resume();
  };
  if (autoStart) resume();
  return {
    clear,
    pause,
    remains: () => remains,
    resume,
    restart,
    running: () => running,
    start: () => {
      if (!running) resume();
    },
  };
};

export default timer;
