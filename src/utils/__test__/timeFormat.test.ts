import { test, describe, expect } from 'vitest';
import { onGetTime } from "../timeFormat";

describe('onGetTime', () => {
  test('returns time foramt "mm:ss" when the input is number', () => {
    expect(onGetTime(1500000)).toBe("25:00");
    expect(onGetTime(90000)).toBe("01:30");
    
    expect(onGetTime(0)).toBe("00:00");
    expect(onGetTime(-1)).toBe("00:00");
    expect(onGetTime(15000000000)).toBe("59:59");
  });
});
