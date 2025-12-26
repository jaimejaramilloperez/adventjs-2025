import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { moveReno } from './index.ts';

describe('Challenge #09 - 🦌 The robot vacuum reindeer', () => {
  it('Test #01 - Returns a string', () => {
    const result = moveReno(`
      .....
      .*#.*
      .@...
      .....
    `,
    'U');

    const expected = 'string';
    assert.strictEqual(typeof result, expected);
  });

  it(`Test #02 - moveReno("
      .....
      .*#.*
      .@...
      .....
    ",
    'U'))`, () => {
    const result = moveReno(`
      .....
      .*#.*
      .@...
      .....
    `,
    'U');

    const expected = 'success';
    assert.strictEqual(result, expected);
  });

  it(`Test #03 - moveReno("
      .....
      .*#.*
      .@...
      .....
    ",
    'RRRUU'))`, () => {
    const result = moveReno(`
      .....
      .*#.*
      .@...
      .....
    `,
    'RRRUU');

    const expected = 'success';
    assert.strictEqual(result, expected);
  });

  it(`Test #04 - moveReno("
      .....
      .*#.*
      .@...
      .....
    ",
    'D'))`, () => {
    const result = moveReno(`
      .....
      .*#.*
      .@...
      .....
    `,
    'D');

    const expected = 'fail';
    assert.strictEqual(result, expected);
  });

  it(`Test #05 - moveReno("
      .....
      .*#.*
      .@...
      .....
    ",
    'DD'))`, () => {
    const result = moveReno(`
      .....
      .*#.*
      .@...
      .....
    `,
    'DD');

    const expected = 'crash';
    assert.strictEqual(result, expected);
  });

  it(`Test #06 - moveReno("
      .....
      .*#.*
      .@...
      .....
    ",
    'RU'))`, () => {
    const result = moveReno(`
      .....
      .*#.*
      .@...
      .....
    `,
    'RU');

    const expected = 'crash';
    assert.strictEqual(result, expected);
  });

  it(`Test #07 - moveReno("
      .....
      .*#.*
      .@...
      .....
    ",
    'UUU'))`, () => {
    const result = moveReno(`
      .....
      .*#.*
      .@...
      .....
    `,
    'UUU');

    const expected = 'success';
    assert.strictEqual(result, expected);
  });

  it(`Test #08 - moveReno("
      .....
      .*#.*
      .@...
      .....
    ",
    'RR'))`, () => {
    const result = moveReno(`
      .....
      .*#.*
      .@...
      .....
    `,
    'RR');

    const expected = 'fail';
    assert.strictEqual(result, expected);
  });

  it(`Test #09 - moveReno("
      .....
      .....
      .@..*
      .....
    ",
    'RRRRRRRRR'))`, () => {
    const result = moveReno(`
      .....
      .....
      .@..*
      .....
    `,
    'RRRRRRRRR');

    const expected = 'success';
    assert.strictEqual(result, expected);
  });
});
