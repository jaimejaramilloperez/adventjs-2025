import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { matchGloves } from './index.ts';

describe('Challenge #06 - 🧤 Matching gloves', () => {
  it('Test #01 - Returns an Array', () => {
    const result = matchGloves([
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' },
      { hand: 'L', color: 'green' }
    ]);

    const expected = 'Array';

    assert.strictEqual(result.constructor.name, expected);
  });

  it(`Test #02 - matchGloves([
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' },
      { hand: 'L', color: 'green' }
    ])`, () => {
    const result = matchGloves([
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' },
      { hand: 'L', color: 'green' }
    ]);

    const expected = ['red', 'green'];

    assert.deepStrictEqual(result, expected);
  });

  it(`Test #03 - matchGloves([
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' }
    ])`, () => {
    const result = matchGloves([
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'L', color: 'gold' },
      { hand: 'R', color: 'gold' }
    ]);

    const expected = ['gold', 'gold'];

    assert.deepStrictEqual(result, expected);
  });

  it(`Test #04 - matchGloves([
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' }
    ])`, () => {
    const result = matchGloves([
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'blue' }
    ]);

    const expected: string[] = [];

    assert.deepStrictEqual(result, expected);
  });

  it(`Test #05 - matchGloves([
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' }
    ])`, () => {
    const result = matchGloves([
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'R', color: 'green' }
    ]);

    const expected = ['red', 'green'];

    assert.deepStrictEqual(result, expected);
  });

  it(`Test #06 - matchGloves([
      { hand: 'R', color: 'blue' },
      { hand: 'L', color: 'blue' },
      { hand: 'R', color: 'blue' },
      { hand: 'L', color: 'blue' },
      { hand: 'L', color: 'blue' }
    ])`, () => {
    const result = matchGloves([
      { hand: 'R', color: 'blue' },
      { hand: 'L', color: 'blue' },
      { hand: 'R', color: 'blue' },
      { hand: 'L', color: 'blue' },
      { hand: 'L', color: 'blue' }
    ]);

    const expected = ['blue', 'blue'];

    assert.deepStrictEqual(result, expected);
  });

  it(`Test #07 - matchGloves([
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' }
    ])`, () => {
    const result = matchGloves([
      { hand: 'R', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'R', color: 'red' },
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' }
    ]);

    const expected = ['red', 'green'];

    assert.deepStrictEqual(result, expected);
  });

  it(`Test #08 - matchGloves([
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'L', color: 'red' },
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' }
    ])`, () => {
    const result = matchGloves([
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' },
      { hand: 'L', color: 'red' },
      { hand: 'L', color: 'green' },
      { hand: 'L', color: 'red' }
    ]);

    const expected: number[] = [];

    assert.deepStrictEqual(result, expected);
  });

  it(`Test #09 - matchGloves([
      { hand: 'L', color: 'silver' },
      { hand: 'L', color: 'silver' },
      { hand: 'R', color: 'silver' },
      { hand: 'R', color: 'silver' },
      { hand: 'R', color: 'silver' }
    ])`, () => {
    const result = matchGloves([
      { hand: 'L', color: 'silver' },
      { hand: 'L', color: 'silver' },
      { hand: 'R', color: 'silver' },
      { hand: 'R', color: 'silver' },
      { hand: 'R', color: 'silver' }
    ]);

    const expected = ['silver', 'silver'];

    assert.deepStrictEqual(result, expected);
  });
});
