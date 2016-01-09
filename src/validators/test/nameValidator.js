const jsc = require('jsverify');
const test = require('tape');

const tapeCheck = require('../../test-utils/tape-check.js');
const validator = require('../nameValidator.js');

//Helpers
function validValue(val) {
  return validator(val).length === 0;
}

//Properties
const allNonEmptyStringsAreValid = jsc.forall(jsc.nestring, validValue);

//Cases
test('nameValidator: given non-empty string', function(t) {

  tapeCheck(allNonEmptyStringsAreValid, t, 'should be valid');
  t.end();
});

test('nameValidator: given empty string name', function(t) {
  t.notOk(validValue(''), 'should be invalid');
  t.end();
});
