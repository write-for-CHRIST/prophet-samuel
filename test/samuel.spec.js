/* global describe, it, before */

import chai from 'chai';
import { Samuel } from '../src/index';
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
  describe('reactive', () => {
    it('should listen on new value', () => {
      expect(samuel).to.have.property('_subject');
      expect(samuel).to.have.property('_observable$');
    });
  });
});
