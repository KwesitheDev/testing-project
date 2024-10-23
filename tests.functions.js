import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './functions';

describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('works with already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('works with single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('handles empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  test('handles non-string inputs', () => {
    expect(capitalize(123)).toBe('');
  });
});

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('works with palindromes', () => {
    expect(reverseString('radar')).toBe('radar');
  });

  test('maintains spaces and punctuation', () => {
    expect(reverseString('hello world!')).toBe('!dlrow olleh');
  });

  test('handles empty strings', () => {
    expect(reverseString('')).toBe('');
  });

  test('handles non-string inputs', () => {
    expect(reverseString(123)).toBe('');
  });
});

describe('calculator', () => {
  test('adds two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
  });

  test('subtracts two numbers correctly', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(1, 3)).toBe(-2);
  });

  test('multiplies two numbers correctly', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  test('divides two numbers correctly', () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(5, 2)).toBe(2.5);
  });

  test('handles division by zero', () => {
    expect(calculator.divide(5, 0)).toBe(NaN);
  });

  test('handles non-number inputs', () => {
    expect(calculator.add('2', 3)).toBe(NaN);
    expect(calculator.subtract(2, '3')).toBe(NaN);
    expect(calculator.multiply('2', '3')).toBe(NaN);
    expect(calculator.divide('6', 2)).toBe(NaN);
  });
});

describe('caesarCipher', () => {
  test('shifts letters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('hello', 2)).toBe('jgnnq');
  });

  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('preserves punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('handles large shift factors', () => {
    expect(caesarCipher('abc', 28)).toBe('cde'); // 28 % 26 = 2
  });

  test('handles negative shift factors', () => {
    expect(caesarCipher('def', -3)).toBe('abc');
  });

  test('handles empty strings', () => {
    expect(caesarCipher('', 5)).toBe('');
  });

  test('handles invalid inputs', () => {
    expect(caesarCipher(123, 5)).toBe('');
    expect(caesarCipher('hello', '5')).toBe('');
  });
});

describe('analyzeArray', () => {
  test('analyzes array correctly', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test('handles array with negative numbers', () => {
    const result = analyzeArray([-1, -5, 0, 2, -3]);
    expect(result).toEqual({
      average: -1.4,
      min: -5,
      max: 2,
      length: 5
    });
  });

  test('handles single element array', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1
    });
  });

  test('returns null for empty array', () => {
    expect(analyzeArray([])).toBe(null);
  });

  test('returns null for invalid inputs', () => {
    expect(analyzeArray(['1', 2, 3])).toBe(null);
    expect(analyzeArray(123)).toBe(null);
    expect(analyzeArray(null)).toBe(null);
  });
});
