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
    samuel = new Samuel(subject);
  });
  describe('check core', () => {
    it('should have core properties', () => {
      expect(samuel).to.have.property('_watcher');
      expect(samuel).to.have.property('_subject');
      expect(samuel).to.have.property('_observable$');
    });
  });
});
