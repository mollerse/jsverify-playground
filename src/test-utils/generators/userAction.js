const jsc = require('jsverify');
const flatten = require('lodash/array/flatten');

const emailGenerator = require('./email.js');
const phoneGenerator = require('./phone.js');
const userActions = require('../../actions/userActions');

//Low level buildingblocks
const updateNameActionGenerator = jsc.record({type: jsc.constant(userActions.UPDATE_NAME), name: jsc.nestring});
const updateEmailActionGenerator = jsc.record({type: jsc.constant(userActions.UPDATE_EMAIL), email: emailGenerator});
const updatePhoneActionGenerator = jsc.record({type: jsc.constant(userActions.UPDATE_PHONE), phone: phoneGenerator});
// const validateActionGenerator = jsc.record({type: jsc.constant(userActions.VALIDATE), field: jsc.elements(['email', 'phone', 'all'])});

const updateActionGenerator = jsc.nearray(jsc.oneof([updateNameActionGenerator, updateEmailActionGenerator, updatePhoneActionGenerator]));

module.exports.updateActionGenerator = updateActionGenerator;
