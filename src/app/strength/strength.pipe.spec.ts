import {StrengthPipe} from './strength.pipe';

describe('Strength Pipe', () => {

  describe('transform function', () => {

    it('should print weak if strength is less than 10', () => {
      const pipe = new StrengthPipe();
      let result: string;
      result = pipe.transform(9);
      expect(result).toBe('9 (weak)');
    });

    it('should print strong if strength is between 10 to 19 (inclusive)', () => {
      const pipe = new StrengthPipe();
      let result: string;
      result = pipe.transform(10);
      expect(result).toBe('10 (strong)');
      result = pipe.transform(19);
      expect(result).toBe('19 (strong)');
    });

    it('should print unbelievable if 20 and above', () => {
      const pipe = new StrengthPipe();
      let result: string;
      result = pipe.transform(20);
      expect(result).toBe('20 (unbelievable)');
    });
  });
});
