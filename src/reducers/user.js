const userActions = require('../actions/userActions.js');

const defaultState = {
  phone: {}
};

module.exports = function reduceUser(state = defaultState, action) {
  if(action.type === userActions.UPDATE_NAME) {
    var name = action.name;
    return {...state, name};
  }
  else if(action.type === userActions.UPDATE_EMAIL) {
    var email = action.email;
    return {...state, email};
  }
  else if(action.type === userActions.UPDATE_PHONE) {
    var originalPhone = state.phone;
    var phone = action.phone;
    phone = {...originalPhone, ...phone};

    return {...state, phone};
  }
  return state;
};
