const jsc = require('jsverify');
const flatten = require('lodash/array/flatten');

function fromCode(code) {
  return String.fromCharCode(code);
}

function toCode(str) {
  return str.charCodeAt(0);
}

function charsToString(chars) {
  return chars.join('');
}

function stringToChars(string) {
  return string.split('');
}

function flattenCharsToString(chars) {
  return flatten(chars, true).join('');
}

//Buildingblocks
const asciinumber = jsc.integer(0x30, 0x39).smap(fromCode, toCode);
const asciiletter = jsc.integer(0x41, 0x5A).smap(fromCode, toCode);
const percentage = jsc.integer(0x25, 0x25).smap(fromCode, toCode);
const dot = jsc.integer(0x2E, 0x2E).smap(fromCode, toCode);
const underscore = jsc.integer(0x5F, 0x5F).smap(fromCode, toCode);
const pluss = jsc.integer(0x2B, 0x2B).smap(fromCode, toCode);
const dash = jsc.integer(0x2D, 0x2D).smap(fromCode, toCode);

//2nd level buildingblocks
const name = jsc.nearray(jsc.oneof(asciinumber, asciiletter, percentage, dot, underscore, pluss, dash)).smap(charsToString, stringToChars);
const domain = jsc.nearray(jsc.oneof(asciinumber, asciiletter, dot, dash)).smap(charsToString, stringToChars);
const tld = jsc.pair(asciiletter, jsc.pair(asciiletter, jsc.array(asciiletter))).smap(flattenCharsToString, stringToChars);

const emailGenerator = jsc.bless({
  generator: jsc.pair(name, jsc.pair(domain, tld)).generator.map(function(strings) {
    strings = flatten(strings);
    return `${strings[0]}@${strings[1]}.${strings[2]}`;
  })
});

module.exports = emailGenerator;
