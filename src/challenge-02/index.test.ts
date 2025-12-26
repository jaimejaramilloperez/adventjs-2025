import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { manufactureGifts } from './index.ts';

describe('Challenge #02 - 🏭 Manufacture the toys', () => {
  it('Test #01 - Returns an Array', () => {
    const result = manufactureGifts([{ toy: 'car', quantity: 3 }, { toy: 'doll', quantity: 1 }, { toy: 'ball', quantity: 2 }]);
    const expected = 'Array';
    assert.strictEqual(result.constructor.name, expected);
  });

  it('Test #02 - manufactureGifts([{ toy: "car", quantity: 3 }, { toy: "doll", quantity: 1 }, { toy: "ball", quantity: 2 }])', () => {
    const result = manufactureGifts([{ toy: 'car', quantity: 3 }, { toy: 'doll', quantity: 1 }, { toy: 'ball', quantity: 2 }]);
    const expected = ['car', 'car', 'car', 'doll', 'ball', 'ball'];
    assert.deepStrictEqual(result, expected);
  });

  it('Test #03 - manufactureGifts([{ toy: "train", quantity: 0 }, { toy: "bear", quantity: -2 }, { toy: "puzzle", quantity: 1 }])', () => {
    const result = manufactureGifts([{ toy: 'train', quantity: 0 }, { toy: 'bear', quantity: -2 }, { toy: 'puzzle', quantity: 1 }]);
    const expected = ['puzzle'];
    assert.deepStrictEqual(result, expected);
  });

  it('Test #04 - manufactureGifts([])', () => {
    const result = manufactureGifts([]);
    const expected: string[] = [];
    assert.deepStrictEqual(result, expected);
  });

  it('Test #05 - manufactureGifts([{ toy: "car", quantity: 1 }, { toy: "doll", quantity: 2 }, { toy: "ball", quantity: 0 }, { toy: "car", quantity: 3 }])', () => {
    const result = manufactureGifts([{ toy: 'car', quantity: 1 }, { toy: 'doll', quantity: 2 }, { toy: 'ball', quantity: 0 }, { toy: 'car', quantity: 3 }]);
    const expected = ['car', 'doll', 'doll', 'car', 'car', 'car'];
    assert.deepStrictEqual(result, expected);
  });

  it('Test #06 - manufactureGifts([{ toy: "robot", quantity: 2 }, { toy: "drone", quantity: -3 }, { toy: "ball", quantity: 1 }])', () => {
    const result = manufactureGifts([{ toy: 'robot', quantity: 2 }, { toy: 'drone', quantity: -3 }, { toy: 'ball', quantity: 1 }]);
    const expected = ['robot', 'robot', 'ball'];
    assert.deepStrictEqual(result, expected);
  });
});
