import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { drawGift } from './index.ts';

describe('Challenge #03 - 👶 Help the intern', () => {
  it('Test #01 - Returns an Array', () => {
    const result = drawGift(1, '+');
    const expected = 'string';
    assert.strictEqual(typeof result, expected);
  });

  it('Test #02 - drawGift(1, "+")', () => {
    const result = drawGift(1, '+');
    const expected = '';
    assert.strictEqual(result, expected);
  });

  it('Test #03 - drawGift(2, "#")', () => {
    const result = drawGift(2, '#');
    const expected = `##
##`;
    assert.strictEqual(result, expected);
  });

  it('Test #04 - drawGift(3, "#")', () => {
    const result = drawGift(3, '#');
    const expected = `###
# #
###`;
    assert.strictEqual(result, expected);
  });

  it('Test #05 - drawGift(4, "*")', () => {
    const result = drawGift(4, '*');
    const expected = `****
*  *
*  *
****`;
    assert.strictEqual(result, expected);
  });

  it('Test #06 - drawGift(5, "@")', () => {
    const result = drawGift(5, '@');
    const expected = `@@@@@
@   @
@   @
@   @
@@@@@`;
    assert.strictEqual(result, expected);
  });
});
