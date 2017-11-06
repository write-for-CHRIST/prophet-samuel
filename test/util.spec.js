import chai from 'chai';
import { parseRelPath } from '../src/core/util';

chai.expect();

const expect = chai.expect;

describe('core/util.js', () => {
  it('should parse rel path', () => {
    let parsed = parseRelPath(
      '/path/from/root',
      '/path/from/root/sub/dir/file.txt'
    );

    expect(parsed.rel).to.be.equal('/sub/dir/');
  });
});
