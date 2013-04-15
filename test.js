var ffi = require('ffi');

var libm = ffi.Library('libm', {
      'ceil': [ 'double', [ 'double' ] ]
});

var ans = libm.ceil(1.5);

console.log(ans);
