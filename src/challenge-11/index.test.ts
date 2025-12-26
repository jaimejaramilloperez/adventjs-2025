import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { findUnsafeGifts } from './index.ts';

describe('Challenge #11 - 📹 Unwatched gifts', () => {
  it('Test #01 - Returns a number', () => {
    const result = findUnsafeGifts([
      '.*.',
      '*#*',
      '.*.'
    ]);

    const expected = 'number';
    assert.strictEqual(typeof result, expected);
  });

  it(`Test #02 - findUnsafeGifts([
      '.*.',
      '*#*',
      '.*.'
    ]))`, () => {
    const result = findUnsafeGifts([
      '.*.',
      '*#*',
      '.*.'
    ]);

    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it(`Test #03 - findUnsafeGifts([
      '...',
      '.*.',
      '...'
    ]))`, () => {
    const result = findUnsafeGifts([
      '...',
      '.*.',
      '...'
    ]);

    const expected = 1;
    assert.strictEqual(result, expected);
  });

  it(`Test #04 - findUnsafeGifts([
      '*.*',
      '...',
      '*#*'
    ]))`, () => {
    const result = findUnsafeGifts([
      '*.*',
      '...',
      '*#*'
    ]);

    const expected = 2;
    assert.strictEqual(result, expected);
  });

  it(`Test #05 - findUnsafeGifts([
      '.....',
      '.*.*.',
      '..#..',
      '.*.*.',
      '.....'
    ]))`, () => {
    const result = findUnsafeGifts([
      '.....',
      '.*.*.',
      '..#..',
      '.*.*.',
      '.....'
    ]);

    const expected = 4;
    assert.strictEqual(result, expected);
  });

  it(`Test #06 - findUnsafeGifts([
      '#*.',
      '...',
      '..#'
    ]))`, () => {
    const result = findUnsafeGifts([
      '#*.',
      '...',
      '..#'
    ]);

    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it(`Test #07 - findUnsafeGifts([
      '...#....',
      '..*#*..',
      '...#....'
    ]))`, () => {
    const result = findUnsafeGifts([
      '...#....',
      '..*#*..',
      '...#....'
    ]);

    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it(`Test #08 - findUnsafeGifts([
      '*.*',
      '...',
      '*.*'
    ]))`, () => {
    const result = findUnsafeGifts([
      '*.*',
      '...',
      '*.*'
    ]);

    const expected = 4;
    assert.strictEqual(result, expected);
  });
});
