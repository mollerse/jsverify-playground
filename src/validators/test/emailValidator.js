const jsc = require('jsverify');
const test = require('tape');

const tapeCheck = require('../../test-utils/tape-check.js');
const emailGenerator = require('../../test-utils/generators/email.js');
const validator = require('../emailValidator.js');

//Helpers
function validValue(val) {
  return validator(val).length === 0;
}

//Properties
const validEmailsAreValid = jsc.forall(emailGenerator, validValue);

//Cases
test('emailValidator: given valid email', function(t) {
  tapeCheck(validEmailsAreValid, t, 'should be valid');
  t.end();
});

test('emailValidator: given obviously invalid email', function(t) {
  t.notOk(validValue('asdf'), 'should be invalid');
  t.end();
});

test('emailValidator: given invalid email', function(t) {
  t.notOk(validValue('as&&&////df@\\\\.33'), 'should be invalid');
  t.end();
});

test('emailValidator: given edgecase invalid email', function(t) {
  t.notOk(validValue('asdf@asdf.'), 'should be invalid');
  t.end();
});
