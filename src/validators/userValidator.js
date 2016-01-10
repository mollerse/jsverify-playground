module.exports = function userValidator(user) {
  let messages = [];
  if(!user.name) {
    messages.push(['name', 'You must enter a name']);
  }
  if(!user.email) {
    messages.push(['email', 'You must enter an email']);
  }
  if(!user.phone.prefix) {
    messages.push(['phone', 'You must enter a phone prefix']);
  }
  if(!user.phone.number) {
    messages.push(['phone', 'You must enter a phone number']);
  }

  return messages;
};
