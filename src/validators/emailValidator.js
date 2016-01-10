module.exports = function emailValidator(email) {
  let messages = [];
  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    messages.push('You must enter a valid email');
  }
  return messages;
};
