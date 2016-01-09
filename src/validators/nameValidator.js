const isString = require('lodash/lang/isString');

module.exports = function nameValidator(name) {
  let messages = [];
  if(!name) {
    messages.push('You must enter a name');
  }
  return messages;
};
