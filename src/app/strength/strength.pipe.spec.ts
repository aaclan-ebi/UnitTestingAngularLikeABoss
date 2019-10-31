import {StrengthPipe} from './strength.pipe';

describe('Strength Pipe', () => {
  describe('transform function', () => {
    let pipe;

    beforeEach(() => {
      pipe = new StrengthPipe();
    });

    it('should print weak when less than 10', () => {
      const res = pipe.transform(9);
      expect(res).toBe('9 (weak)');
    });

    it('should print strong when greater 10...', () => {
      const res = pipe.transform(11);
      expect(res).toEqual('11 (strong)');
    });
  });
});
