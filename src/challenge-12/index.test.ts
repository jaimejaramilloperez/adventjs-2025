import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { elfBattle } from './index.ts';

describe('Challenge #12 - ⚔️ Elf battle', () => {
  it('Test #01 - Returns a number', () => {
    const result = elfBattle('A', 'B');
    const expected = 'number';
    assert.strictEqual(typeof result, expected);
  });

  it('Test #02 - elfBattle("A", "B")', () => {
    const result = elfBattle('A', 'B');
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it('Test #03 - elfBattle("F", "B")', () => {
    const result = elfBattle('F', 'B');
    const expected = 1;
    assert.strictEqual(result, expected);
  });

  it('Test #04 - elfBattle("AAB", "BBA")', () => {
    const result = elfBattle('AAB', 'BBA');
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it('Test #05 - elfBattle("AFA", "BBA")', () => {
    const result = elfBattle('AFA', 'BBA');
    const expected = 1;
    assert.strictEqual(result, expected);
  });

  it('Test #06 - elfBattle("AFAB", "BBAF")', () => {
    const result = elfBattle('AFAB', 'BBAF');
    const expected = 1;
    assert.strictEqual(result, expected);
  });

  it('Test #07 - elfBattle("AA", "FF")', () => {
    const result = elfBattle('AA', 'FF');
    const expected = 2;
    assert.strictEqual(result, expected);
  });

  it('Test #08 - elfBattle("AAFFFBBB", "ABBBBFFF")', () => {
    const result = elfBattle('AAFFFBBB', 'ABBBBFFF');
    const expected = 1;
    assert.strictEqual(result, expected);
  });
});
