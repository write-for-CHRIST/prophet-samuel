/* global describe, it, before */

import chai from 'chai';
import Samuel from '../src/index';
import { Subject } from 'rxjs/Subject';

chai.expect();

const expect = chai.expect;
let samuel;
let subject;

describe('Prophet Samuel', () => {
  before(() => {
    subject = new Subject();
    samuel = new Samuel(500, subject);
  });
  describe('check core functions', () => {
    it('should have core properties', () => {
      expect(samuel).to.have.property('_watcher');
      expect(samuel).to.have.property('_subject');
      expect(samuel).to.have.property('_observable$');
      expect(samuel).to.have.property('watcher');
      expect(samuel).to.have.property('listening');
    });
    it('should listen for change', function (done) {
      this.timeout(200);
      expect(samuel.listening).to.be.equal(false);
      samuel.listenOn(__dirname);
      setTimeout(() => {
        expect(samuel.listening).to.be.equal(true);
        done();
      }, 100);
    });
    it('should stop listening', function (done) {
      this.timeout(200);
      samuel.stop();
      setTimeout(() => {
        expect(samuel.listening).to.be.equal(false);
        done();
      }, 100);
    });
  });
});
