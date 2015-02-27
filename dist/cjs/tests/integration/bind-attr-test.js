'use strict';

var utils = require('../support/utils');
var integration_assertions = require('../support/integration-assertions');

/*global QUnit*/

QUnit.module("bind-attr behavior for unquoted attribute values");

test("basic", function () {
  var emblem = "p class=foo";
  integration_assertions.compilesTo(emblem, "<p {{bind-attr class=\"foo\"}}></p>");
});

test("basic w/ underscore", function () {
  var emblem = "p class=foo_urns";
  integration_assertions.compilesTo(emblem, "<p {{bind-attr class=\"foo_urns\"}}></p>");
});

test("subproperties", function () {
  var emblem = "p class=foo._death.woot";
  integration_assertions.compilesTo(emblem, "<p {{bind-attr class=\"foo._death.woot\"}}></p>");
});

test("multiple", function () {
  var emblem = "p class=foo id=\"yup\" data-thinger=yeah Hooray";
  integration_assertions.compilesTo(emblem, "<p id=\"yup\" {{bind-attr data-thinger=yeah}} {{bind-attr class=\"foo\"}}>Hooray</p>");
});

test("class bind-attr special syntax", function () {
  var emblem = "p class=foo:bar:baz";
  integration_assertions.compilesTo(emblem, "<p {{bind-attr class=\"foo:bar:baz\"}}></p>");
});

test("class bind-attr braced syntax w/ underscores and dashes", function () {
  integration_assertions.compilesTo("p class={f-oo:bar :b_az}", "<p {{bind-attr class=\"f-oo:bar :b_az\"}}></p>");
  integration_assertions.compilesTo("p class={ f-oo:bar :b_az }", "<p {{bind-attr class=\"f-oo:bar :b_az\"}}></p>");
  integration_assertions.compilesTo("p class={ f-oo:bar :b_az } Hello", "<p {{bind-attr class=\"f-oo:bar :b_az\"}}>Hello</p>");
  var emblem = utils.w(".input-prepend class={ filterOn:input-append }", "  span.add-on");
  integration_assertions.compilesTo(emblem, "<div {{bind-attr class=\":input-prepend filterOn:input-append\"}}><span class=\"add-on\"></span></div>");
});

test("exclamation modifier (ember)", function () {
  var emblem = "p class=foo!";
  integration_assertions.compilesTo(emblem, "<p class=\"{{unbound foo}}\"></p>");
});

test("block as #each", function () {
  var emblem = utils.w("thangs", "  p Woot #{yeah}");
  integration_assertions.compilesTo(emblem, "{{#thangs}}<p>Woot {{yeah}}</p>{{/thangs}}");
});