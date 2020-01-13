import timer from '../index';

jest.useFakeTimers();

describe('timer', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });
  const callback = jest.fn();
  describe('default', () => {
    it('creates resumable timer', () => {
      const testTimer = timer(callback, 1000);
      testTimer.start();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(callback, 1000);
      const remains = testTimer.pause();
      expect(clearTimeout).toHaveBeenCalledTimes(2);
      expect(testTimer.remains()).toBe(remains);
      expect(testTimer.running()).toBe(false);
    });
  });
  describe('autoStart', () => {
    it('creates and starts resumable timer', () => {
      const autoStarted = timer(callback, 1000, true);
      expect(autoStarted.start()).toBeUndefined();
      expect(autoStarted.running()).toBe(true);
      expect(setTimeout).toHaveBeenCalled();
      expect(clearTimeout).toHaveBeenCalled();
      autoStarted.restart();
      expect(autoStarted.remains()).toBe(1000);
    });
  });
});
