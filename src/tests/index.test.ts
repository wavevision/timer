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
      testTimer.pause();
      expect(clearTimeout).toHaveBeenCalledTimes(2);
    });
  });
  describe('autoStart', () => {
    it('creates and starts resumable timer', () => {
      timer(callback, 1000, true);
      expect(setTimeout).toHaveBeenCalled();
      expect(clearTimeout).toHaveBeenCalled();
    });
  });
});
