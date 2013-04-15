var gui = require('nw.gui');
var new_win;

$(function() {
    new_win = gui.Window.get(
        window.open('http://zijingbt.njuftp.org/login.html')
    );

    new_win.show();
});