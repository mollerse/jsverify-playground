const jsc = require('jsverify');

function formatFailedCase(r, state) {
  var msg = 'Failed after ' + r.tests + ' tests and ' + r.shrinks + ' shrinks. ';
  msg += 'rngState: ' + (r.rngState || state) + '; ';
  msg += 'Counterexample: ' + r.counterexamplestr + '; ';
  if (r.exc) {
    if (r.exc instanceof Error) {
      msg += 'Exception: ' + r.exc.message;
      msg += '\nStack trace: ' + r.exc.stack;
    } else {
      msg += 'Error: ' + r.exc;
    }
  }
  return msg;
}

module.exports = function tapeCheck(prop, t, msg='') {
  let res = jsc.check(prop, {quiet: true});

  if(res === true) {
    t.pass(msg);
  } else {
    t.fail(formatFailedCase(res), msg);
  }
};
