const jsc = require('jsverify');
const test = require('tape');

const tapeCheck = require('../../test-utils/tape-check.js');
const userGenerator = require('../../test-utils/generators/user.js');
const phonenumberGenerator = require('../../test-utils/generators/phonenumber.js');
const validator = require('../userValidator.js');

//Helpers
function validValue(val) {
  return validator(val).length === 0;
}

//Properties
const validUsersAreValid = jsc.forall(userGenerator, validValue);
const validUser = jsc.sampler(userGenerator)();
const validPhone = jsc.sampler(phonenumberGenerator)();

//Cases
test('userValidator: given valid user', function(t) {
  tapeCheck(validUsersAreValid, t, 'should be valid');
  t.end();
});

test('userValidator: without email', function(t) {
  t.notOk(validValue({...validUser, email: ''}), 'should be invalid');
  t.end();
});

test('userValidator: without name', function(t) {
  t.notOk(validValue({...validUser, name: ''}), 'should be invalid');
  t.end();
});

test('userValidator: without phone prefix', function(t) {
  let phone = {...validPhone, prefix: ''};
  t.notOk(validValue({...validUser, phone}), 'should be invalid');
  t.end();
});

test('userValidator: without phone number', function(t) {
  let phone = {...validPhone, number: ''};
  t.notOk(validValue({...validUser, phone}), 'should be invalid');
  t.end();
});
