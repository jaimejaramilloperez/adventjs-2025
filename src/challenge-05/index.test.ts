import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { timeUntilTakeOff } from './index.ts';

describe('Challenge #05 - ⏱️ The countdown to take off', () => {
  it('Test #01 - Returns a number', () => {
    const result = timeUntilTakeOff('2025*12*24@23|59|30 NP', '2025*12*25@00|00|00 NP');
    const expected = 'number';
    assert.strictEqual(typeof result, expected);
  });

  it('Test #02 - timeUntilTakeOff("2025*12*24@23|59|30 NP", "2025*12*25@00|00|00 NP")', () => {
    const result = timeUntilTakeOff('2025*12*24@23|59|30 NP', '2025*12*25@00|00|00 NP');
    const expected = 30;
    assert.strictEqual(result, expected);
  });

  it('Test #03 - timeUntilTakeOff("2025*12*25@00|00|00 NP", "2025*12*25@00|00|00 NP")', () => {
    const result = timeUntilTakeOff('2025*12*25@00|00|00 NP', '2025*12*25@00|00|00 NP');
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it('Test #04 - timeUntilTakeOff("2025*12*25@00|00|12 NP", "2025*12*25@00|00|00 NP")', () => {
    const result = timeUntilTakeOff('2025*12*25@00|00|12 NP', '2025*12*25@00|00|00 NP');
    const expected = -12;
    assert.strictEqual(result, expected);
  });

  it('Test #05 - timeUntilTakeOff("2025*12*24@00|00|00 NP", "2025*12*25@00|00|00 NP")', () => {
    const result = timeUntilTakeOff('2025*12*24@00|00|00 NP', '2025*12*25@00|00|00 NP');
    const expected = 86400;
    assert.strictEqual(result, expected);
  });

  it('Test #06 - timeUntilTakeOff("2025*12*27@00|00|00 NP", "2025*12*25@00|00|00 NP")', () => {
    const result = timeUntilTakeOff('2025*12*27@00|00|00 NP', '2025*12*25@00|00|00 NP');
    const expected = -172800;
    assert.strictEqual(result, expected);
  });

  it('Test #07 - timeUntilTakeOff("2030*01*01@00|00|10 NP", "2030*01*01@00|00|20 NP")', () => {
    const result = timeUntilTakeOff('2030*01*01@00|00|10 NP', '2030*01*01@00|00|20 NP');
    const expected = 10;
    assert.strictEqual(result, expected);
  });

  it('Test #08 - timeUntilTakeOff("2030*01*01@00|01|00 NP", "2030*01*01@00|00|00 NP")', () => {
    const result = timeUntilTakeOff('2030*01*01@00|01|00 NP', '2030*01*01@00|00|00 NP');
    const expected = -60;
    assert.strictEqual(result, expected);
  });
});
