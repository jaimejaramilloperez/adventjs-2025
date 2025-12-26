import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { decodeSantaPin } from './index.ts';

describe('Challenge #04 - 🧮 Decipher the Santa PIN', () => {
  it('Test #01 - Returns an string', () => {
    const result = decodeSantaPin('[1++][2-][3+][<]');
    const expected = 'string';
    assert.strictEqual(typeof result, expected);
  });

  it('Test #02 - decodeSantaPin("[1++][2-][3+][<]")', () => {
    const result = decodeSantaPin('[1++][2-][3+][<]');
    const expected = '3144';
    assert.strictEqual(result, expected);
  });

  it('Test #03 - decodeSantaPin("[9+][0-][4][<]")', () => {
    const result = decodeSantaPin('[9+][0-][4][<]');
    const expected = '0944';
    assert.strictEqual(result, expected);
  });

  it('Test #04 - decodeSantaPin("[1+][2-]")', () => {
    const result = decodeSantaPin('[1+][2-]');
    const expected = null;
    assert.strictEqual(result, expected);
  });

  it('Test #05 - decodeSantaPin("[4][5++][6--][5++]")', () => {
    const result = decodeSantaPin('[4][5++][6--][5++]');
    const expected = '4747';
    assert.strictEqual(result, expected);
  });

  it('Test #06 - decodeSantaPin("[9+][0-][0-][8+]")', () => {
    const result = decodeSantaPin('[9+][0-][0-][8+]');
    const expected = '0999';
    assert.strictEqual(result, expected);
  });

  it('Test #07 - decodeSantaPin("[0][<][<][<]")', () => {
    const result = decodeSantaPin('[0][<][<][<]');
    const expected = '0000';
    assert.strictEqual(result, expected);
  });

  it('Test #08 - decodeSantaPin("[1+++++++++][2--][3----][<]")', () => {
    const result = decodeSantaPin('[1+++++++++][2--][3----][<]');
    const expected = '0099';
    assert.strictEqual(result, expected);
  });
});
