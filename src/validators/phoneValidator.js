module.exports = function phoneValidator({number, prefix}) {
  const validPrefix = /\d{2}/.test(prefix);
  const validNumber = /\d{8}/.test(number);

  let messages = [];

  if(!validPrefix) {
    messages.push('You need to enter a valid prefix');
  } else if(!validNumber) {
    messages.push('You need to enter a valid number');
  }

  return messages;
};
