// functions.js
export function capitalize(string) {
  if (typeof string !== 'string' || string.length === 0) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  if (typeof string !== 'string') return '';
  return string.split('').reverse().join('');
}

export const calculator = {
  add: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a + b;
  },
  subtract: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a - b;
  },
  divide: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number' || b === 0) return NaN;
    return a / b;
  },
  multiply: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a * b;
  }
};

export function caesarCipher(str, shift) {
  if (typeof str !== 'string' || typeof shift !== 'number') return '';
  
  // Normalize shift to be within 0-25
  shift = shift % 26;
  if (shift < 0) shift += 26;

  return str.split('').map(char => {
    // Check if character is a letter
    if (!/[a-zA-Z]/.test(char)) return char;
    
    // Determine the case and base code
    const isUpperCase = char === char.toUpperCase();
    const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    
    // Shift the character
    const charCode = char.charCodeAt(0);
    const shifted = ((charCode - base + shift) % 26) + base;
    
    return String.fromCharCode(shifted);
  }).join('');
}

export function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || !arr.every(num => typeof num === 'number')) {
    return null;
  }

  return {
    average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}
