const jsc = require('jsverify');
const test = require('tape');

const tapeCheck = require('../../test-utils/tape-check.js');
const validator = require('../phoneValidator.js');
const phoneGenerator = require('../../test-utils/generators/phone.js');

//Helpers
function validValue(val) {
  return validator(val).length === 0;
}

//Properties
const validPhonenumbersAreValid = jsc.forall(phoneGenerator, validValue);

//Cases
test('phoneValidator: given valid phone', function(t) {
  tapeCheck(validPhonenumbersAreValid, t, 'should be valid');
  t.end();
});

test('phoneValidator: given invalid phone', function(t) {
  t.notOk(validValue({phone: '12312312', prefix: ''}));
  t.end();
});

test('phoneValidator: given invalid phone', function(t) {
  t.notOk(validValue({phone: '', prefix: '12'}));
  t.end();
});
