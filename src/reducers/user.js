const userActions = require('../actions/userActions.js');
const emailValidator = require('../validators/emailValidator.js');
const phoneValidator = require('../validators/phoneValidator.js');
const userValidator = require('../validators/userValidator.js');

const defaultState = {
  phone: {},
  validationMessages: {}
};

const validationConfiguration = {
  email: emailValidator,
  phone: phoneValidator,
  all: userValidator
};

function validate(state, field) {
  const validator = validationConfiguration[field];

  //Model validation trumps all others
  if(field === 'all') {
    return validator(state).reduce(function(acc, [field, msg]) {
      if(!acc[field]) acc[field] = [];
      acc[field].push(msg);
      return acc;
    }, {});
  }

  let messages;
  if(validator && state[field]) {
    messages = validator(state[field]);
  }

  const validationMessages = state.validationMessages;
  return {...validationMessages, [field]: messages};
}

module.exports = function reduceUser(state = defaultState, action) {

  if(action.type === userActions.UPDATE_NAME) {

    const {name} = action;
    return {...state, name};

  } else if(action.type === userActions.UPDATE_EMAIL) {

    const {email} = action;
    return {...state, email};

  } else if(action.type === userActions.UPDATE_PHONE) {

    const phone = Object.assign({}, state.phone, action.phone);
    return {...state, phone};

  } else if(action.type === userActions.VALIDATE) {

    const validationMessages = validate(state, action.field);
    return {...state, validationMessages};

  }

  return state;
};
