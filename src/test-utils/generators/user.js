const jsc = require('jsverify');

const emailGenerator = require('./email.js');
const phonenumberGenerator = require('./phonenumber.js');

//Buildingblocks
const userGenerator = jsc.record({name: jsc.nestring, email: emailGenerator, phone: phonenumberGenerator});

module.exports = userGenerator;
