import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { maxDepth } from './index.ts';

describe('Challenge #10 - 📨 Depth of Christmas magic', () => {
  it('Test #01 - Returns a number', () => {
    const result = maxDepth('[]');
    const expected = 'number';
    assert.strictEqual(typeof result, expected);
  });

  it('Test #02 - maxDepth("[]"))', () => {
    const result = maxDepth('[]');
    const expected = 1;
    assert.strictEqual(result, expected);
  });

  it('Test #03 - maxDepth("[[]]"))', () => {
    const result = maxDepth('[[]]');
    const expected = 2;
    assert.strictEqual(result, expected);
  });

  it('Test #04 - maxDepth("[][]"))', () => {
    const result = maxDepth('[][]');
    const expected = 1;
    assert.strictEqual(result, expected);
  });

  it('Test #05 - maxDepth("[[][]]"))', () => {
    const result = maxDepth('[[][]]');
    const expected = 2;
    assert.strictEqual(result, expected);
  });

  it('Test #06 - maxDepth("[[[]]]"))', () => {
    const result = maxDepth('[[[]]]');
    const expected = 3;
    assert.strictEqual(result, expected);
  });

  it('Test #07 - maxDepth("[][[]][]"))', () => {
    const result = maxDepth('[][[]][]');
    const expected = 2;
    assert.strictEqual(result, expected);
  });

  it('Test #08 - maxDepth("]["))', () => {
    const result = maxDepth('][');
    const expected = -1;
    assert.strictEqual(result, expected);
  });

  it('Test #09 - maxDepth("[[["))', () => {
    const result = maxDepth('[[[');
    const expected = -1;
    assert.strictEqual(result, expected);
  });

  it('Test #10 - maxDepth("[]]]"))', () => {
    const result = maxDepth('[]]]');
    const expected = -1;
    assert.strictEqual(result, expected);
  });

  it('Test #11 - maxDepth("[][]["))', () => {
    const result = maxDepth('[][][');
    const expected = -1;
    assert.strictEqual(result, expected);
  });
});
