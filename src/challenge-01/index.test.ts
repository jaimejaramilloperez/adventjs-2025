import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { filterGifts } from './index.ts';

describe('Challenge #01 - 🎁 Filter the defective gifts', () => {
  it('Test #01 - Returns an Array', () => {
    const result = filterGifts(['car', 'doll#arm', 'ball', '#train']);
    const expected = 'Array';
    assert.strictEqual(result.constructor.name, expected);
  });

  it('Test #02 - filterGifts(["car", "doll#arm", "ball", "#train"])', () => {
    const result = filterGifts(['car', 'doll#arm', 'ball', '#train']);
    const expected = ['car', 'ball'];
    assert.deepStrictEqual(result, expected);
  });

  it('Test #03 - filterGifts(["#broken", "#rusty"])', () => {
    const result = filterGifts(['#broken', '#rusty']);
    const expected: string[] = [];
    assert.deepStrictEqual(result, expected);
  });

  it('Test #04 - filterGifts([])', () => {
    const result = filterGifts([]);
    const expected: string[] = [];
    assert.deepStrictEqual(result, expected);
  });

  it('Test #05 - filterGifts(["game", "poster", "sticker#bad", "console"])', () => {
    const result = filterGifts(['game', 'poster', 'sticker#bad', 'console']);
    const expected = ['game', 'poster', 'console'];
    assert.deepStrictEqual(result, expected);
  });

  it('Test #06 - filterGifts(["#bad", "car", "#oops", "ball"])', () => {
    const result = filterGifts(['#bad', 'car', '#oops', 'ball']);
    const expected = ['car', 'ball'];
    assert.deepStrictEqual(result, expected);
  });
});
