type TimerFn<T = void> = () => T;
type TimerState = {
  id: NodeJS.Timeout;
  start: number;
  remains: number;
  running: boolean;
};

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
  const state = {
    remains: delay,
    running: false,
  } as TimerState;
  const clear: Timer['clear'] = () => {
    clearTimeout(state.id);
    state.running = false;
  };
  const running: Timer['running'] = () => state.running;
  const remains: Timer['remains'] = () => {
    if (running()) return state.remains - (now() - state.start);
    return state.remains;
  };
  const pause: Timer['pause'] = () => {
    clear();
    state.remains = remains();
    state.running = false;
    return remains();
  };
  const resume: Timer['resume'] = () => {
    clear();
    state.start = now();
    state.id = setTimeout(callback, remains());
    state.running = true;
  };
  const restart: Timer['restart'] = () => {
    state.remains = delay;
    resume();
  };
  if (autoStart) resume();
  return {
    clear,
    pause,
    remains,
    resume,
    restart,
    running,
    start: () => {
      if (!running()) resume();
    },
  };
};

export default timer;
