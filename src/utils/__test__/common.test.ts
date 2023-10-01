import { test, describe, expect } from 'vitest';
import { containsWhitespace } from "../common";

describe('containsWhitespace', () => {
  test('returns false when the string has no whitespace', () => {
    expect(containsWhitespace('nf lsn')).toBeTruthy();
    expect(containsWhitespace('I am happy.')).toBeTruthy();
    expect(containsWhitespace('happy moon festival!')).toBeTruthy();
    
    expect(containsWhitespace('nflsn')).toBeFalsy();
    expect(containsWhitespace('test')).toBeFalsy();
    expect(containsWhitespace('')).toBeFalsy();
  });
});
