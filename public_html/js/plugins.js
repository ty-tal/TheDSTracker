// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*$("#tally_total").click(function () {
    var bp01 = $("#bp01");
    var bf01 = $("#bf01");
    var bsc01 = $("#bsc01");
    var bcc01 = $("#bcc01");
    var dailytotal = parseInt(bp01.val()||0)*9*.6 + parseInt(bf01.val()||0)*9*.2 + parseInt(bsc01.val()||0)*9*.6 + parseInt(bcc01.val()||0);
    //alert(bt01);
    $("#dat01").val(dailytotal);
}) */
$(document).ready(function() {
    $(".sum").val("0");
    $(".key").val("");

    function calc() {

        var bp01 = $("#bp01");
        var bf01 = $("#bf01");
        var bsc01 = $("#bsc01");
        var bcc01 = $("#bcc01");
        $(".dat01").val(parseInt(bp01.val()||0)*.6 + parseInt(bf01.val()||0)*9*.2 + parseInt(bsc01.val()||0)*.6 + parseInt(bcc01.val()||0)*.6);
        $(".dat02").val(parseInt(bp01.val()||0) + parseInt(bf01.val()||0) + parseInt(bsc01.val()||0) + parseInt(bcc01.val()||0));
        $(".carbcount01").val(parseInt(bsc01.val()||0)*.6 + parseInt(bcc01.val()||0)*.6);
        $('#message').html("Protein " + $("#bp01").val()*.6 + "g" + " " + "Fat " + $("#bf01").val()*9*.2 + "g" + " " + "Carbs " + $("#carbcount01").val() + "g");
    }
    $(".key").keyup(function() {
        calc();
    });
});