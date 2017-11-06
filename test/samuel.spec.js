/* global describe, it, before */

import chai from 'chai';
import samuel from '../src/index';

chai.expect();

const expect = chai.expect;
let instance;

describe('core/instance.js', () => {
  before(()=> {
    instance = samuel();
  });
  describe('check core functions', () => {
    it('should have core properties', () => {
      expect(instance).to.have.property('_watcher');
      expect(instance).to.have.property('_subject');
      expect(instance).to.have.property('_observable$');
      expect(instance).to.have.property('watcher');
      expect(instance).to.have.property('listening');
    });
    it('should listen for change', function (done) {
      this.timeout(200);
      expect(instance.listening).to.be.equal(false);
      instance.watch(__dirname);
      setTimeout(() => {
        expect(instance.listening).to.be.equal(true);
        done();
      }, 100);
    });
    it('should stop listening', function (done) {
      this.timeout(200);
      instance.stop();
      setTimeout(() => {
        expect(instance.listening).to.be.equal(false);
        done();
      }, 100);
    });
  });
});
