const UPDATE_NAME = module.exports.UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_EMAIL = module.exports.UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PHONE = module.exports.UPDATE_PHONE = 'UPDATE_PHONE';
const VALIDATE = module.exports.VALIDATE = 'VALIDATE';

function fieldValueExtractor(handler) {
  return function(e) {
    const value = e.currentTarget.value;
    const id = e.currentTarget.id;
    return handler(value, id);
  };
}

function updateName(name) {
  return {
    type: UPDATE_NAME,
    name
  };
}

function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    email
  };
}

function updatePhone(value, id) {
  const phone = {[id]: value};
  return {
    type: UPDATE_PHONE,
    phone
  };
}

function validate(field) {
  return {
    type: VALIDATE,
    field
  };
}

module.exports.updateName = fieldValueExtractor(updateName);
module.exports.updateEmail = fieldValueExtractor(updateEmail);
module.exports.updatePhone = fieldValueExtractor(updatePhone);
module.exports.validate = validate;
