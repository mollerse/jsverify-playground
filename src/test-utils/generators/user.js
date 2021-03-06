const jsc = require('jsverify');

const emailGenerator = require('./email.js');
const phoneGenerator = require('./phone.js');

//Buildingblocks
const userGenerator = jsc.record({name: jsc.nestring, email: emailGenerator, phone: phoneGenerator});

module.exports = userGenerator;
