import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { findUniqueToy } from './index.ts';

describe('Challenge #08 - 🎁 Find the unique toy', () => {
  it('Test #01 - Returns a number', () => {
    const result = findUniqueToy('Gift');
    const expected = 'string';
    assert.strictEqual(typeof result, expected);
  });

  it('Test #02 - findUniqueToy("Gift"))', () => {
    const result = findUniqueToy('Gift');
    const expected = 'G';
    assert.strictEqual(result, expected);
  });

  it('Test #03 - findUniqueToy("sS"))', () => {
    const result = findUniqueToy('sS');
    const expected = '';
    assert.strictEqual(result, expected);
  });

  it('Test #04 - findUniqueToy("reindeeR"))', () => {
    const result = findUniqueToy('reindeeR');
    const expected = 'i';
    assert.strictEqual(result, expected);
  });

  it('Test #05 - findUniqueToy("sTreSS"))', () => {
    const result = findUniqueToy('sTreSS');
    const expected = 'T';
    assert.strictEqual(result, expected);
  });

  it('Test #06 - findUniqueToy("aA"))', () => {
    const result = findUniqueToy('aA');
    const expected = '';
    assert.strictEqual(result, expected);
  });

  it('Test #07 - findUniqueToy("z"))', () => {
    const result = findUniqueToy('z');
    const expected = 'z';
    assert.strictEqual(result, expected);
  });

  it('Test #08 - findUniqueToy(""))', () => {
    const result = findUniqueToy('');
    const expected = '';
    assert.strictEqual(result, expected);
  });

  it('Test #09 - findUniqueToy("abcDEF"))', () => {
    const result = findUniqueToy('abcDEF');
    const expected = 'a';
    assert.strictEqual(result, expected);
  });

  it('Test #10 - findUniqueToy("aabbc"))', () => {
    const result = findUniqueToy('aabbc');
    const expected = 'c';
    assert.strictEqual(result, expected);
  });

  it('Test #11 - findUniqueToy("AaBbCc"))', () => {
    const result = findUniqueToy('AaBbCc');
    const expected = '';
    assert.strictEqual(result, expected);
  });
});
