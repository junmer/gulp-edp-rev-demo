/**
 * @file main
 * @author junmer
 */

define(function (require, exports, module) {

    var $ = require('zepto');
    var config = require('config');
    var rev = require('rev/main');

    function log(msg) {
        $('<p>' + msg + '</p>').appendTo('body');
    }

    function main() {
        log(config.title);
        log(rev());
    }

    $(main);

    return main;
});
