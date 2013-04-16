var FFI = require('ffi');

function TEXT(text){
   return new Buffer(text, 'ucs2').toString('binary');
}

var user32 = new FFI.Library('user32', {
   'MessageBoxW': [
      'int32', [ 'int32', 'string', 'string', 'int32' ]
   ]
});

var msgbox = function(msg) {
	return user32.MessageBoxW(0, TEXT(msg), TEXT('Node Robot!'), 1);
}

$(function() {
    $("#btn").click(function() {
    	msgbox($("#txt").val());
    });
});