const jsc = require('jsverify');
const flatten = require('lodash/array/flatten');

function fromCode(code) {
  return String.fromCharCode(code);
}

function toCode(str) {
  return str.charCodeAt(0);
}

function flattenCharsToString(chars) {
  return flatten(chars, true).join('');
}

function inflateStringToChars(string) {
  function pair(chars) {
    if(chars.length === 1) { return chars[0]; }
    return [chars.shift(), pair(chars)];
  }
  return pair(string.split(''));
}

function arbitraryLengthNumber(n) {
  if(n === 1) {
    return asciinumber;
  } else {
    return jsc.pair(asciinumber, arbitraryLengthNumber(n-1));
  }
}

//Buildingblocks
const asciinumber = jsc.integer(0x30, 0x39).smap(fromCode, toCode);
const norwegianNumber = arbitraryLengthNumber(8).smap(flattenCharsToString, inflateStringToChars);
const prefix = arbitraryLengthNumber(2).smap(flattenCharsToString, inflateStringToChars);

const phonenumberGenerator = jsc.record({number: norwegianNumber, prefix});

module.exports = phonenumberGenerator;
