'use strict';

exports.compilesTo = compilesTo;

var utils = require('../support/utils');
var Emblem = require('../../emblem');



function compilesTo(emblem, handlebars, message) {
  var output = Emblem['default'].compile(emblem);
  if (!message) {
    var maxLenth = 40;
    var messageEmblem = emblem.replace(/\n/g, "\\n");
    if (messageEmblem.length > maxLenth) {
      messageEmblem = messageEmblem.slice(0, maxLenth) + "...";
    }
    message = utils.w("compilesTo assertion failed:", "\tEmblem:   \"" + messageEmblem + "\"", "\tExpected: \"" + handlebars + "\"", "\tActual:   \"" + output + "\"");
  }
  QUnit.push(output === handlebars, output, handlebars, message);
};