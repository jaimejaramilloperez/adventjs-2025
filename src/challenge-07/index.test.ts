import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { drawTree } from './index.ts';

describe('Challenge #07 - 🎄 Decorating the tree', () => {
  it('Test #01 - Returns a string', () => {
    const result = drawTree(5, 'o', 2);
    const expected = 'string';
    assert.strictEqual(typeof result, expected);
  });

  it('Test #02 - drawTree(5, "o", 2))', () => {
    const result = drawTree(5, 'o', 2);

    const expected = `    *
   o*o
  *o*o*
 o*o*o*o
*o*o*o*o*
    #`;

    assert.strictEqual(result, expected);
  });

  it('Test #03 - drawTree(3, "@", 3))', () => {
    const result = drawTree(3, '@', 3);

    const expected = `  *
 *@*
*@**@
  #`;

    assert.strictEqual(result, expected);
  });

  it('Test #04 - drawTree(4, "+", 1))', () => {
    const result = drawTree(4, '+', 1);

    const expected = `   +
  +++
 +++++
+++++++
   #`;

    assert.strictEqual(result, expected);
  });

  it('Test #05 - drawTree(1, "x", 2))', () => {
    const result = drawTree(1, 'x', 2);

    const expected = `*
#`;

    assert.strictEqual(result, expected);
  });

  it('Test #06 - drawTree(2, "o", 2))', () => {
    const result = drawTree(2, 'o', 2);

    const expected = ` *
o*o
 #`;

    assert.strictEqual(result, expected);
  });
});
