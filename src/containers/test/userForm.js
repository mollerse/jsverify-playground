const jsc = require('jsverify');
const react = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { createStore } = require('redux');
const test = require('tape');

const tapeCheck = require('../../test-utils/tape-check.js');
const userForm = require('../userForm.js');
const userReducer = require('../../reducers/user.js');
const { updateActionGenerator } = require('../../test-utils/generators/userAction.js');

function renderActionSequence(seq) {
  let initialState = {
    phone: {},
    validationMessages: {}
  };
  let generatedState = seq.reduce(userReducer, initialState);

  const store = createStore(userReducer, generatedState);
  const renderedForm = react.createElement(userForm, {store});

  return renderToStaticMarkup(renderedForm).indexOf('invalid') < 0;
}

const givenOnlyUpdateActionsShouldNeverDisplayValidationErrors = jsc.forall(updateActionGenerator, renderActionSequence);

test('userForm: no validation errors given valid state', function(t) {
  tapeCheck(givenOnlyUpdateActionsShouldNeverDisplayValidationErrors, t, 'should hold');
  t.end();
});
