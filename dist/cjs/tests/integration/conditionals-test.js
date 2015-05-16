'use strict';

var utils = require('../support/utils');
var integration_assertions = require('../support/integration-assertions');

/*global QUnit*/

QUnit.module("conditionals");

test("simple if statement", function () {
  var emblem = utils.w("if foo", "  | Foo", "if bar", "  | Bar");
  integration_assertions.compilesTo(emblem, "{{#if foo}}Foo{{/if}}{{#if bar}}Bar{{/if}}");
});

test("simple if else statement", function () {
  var emblem = utils.w("if foo", "  | Foo", "else", "  | Bar");
  integration_assertions.compilesTo(emblem, "{{#if foo}}Foo{{else}}Bar{{/if}}");
});

test("if else ", function () {
  var emblem = utils.w("if foo", "  | Foo", "  if bar", "    | Bar", "  else", "    | Woot", "else", "  | WRONG", "if bar", "  | WRONG", "else", "  | Hooray");
  integration_assertions.compilesTo(emblem, "{{#if foo}}Foo{{#if bar}}Bar{{else}}Woot{{/if}}{{else}}WRONG{{/if}}{{#if bar}}WRONG{{else}}Hooray{{/if}}");
});

test("else with preceding `=`", function () {
  var emblem = utils.w("= if foo", "  p Yeah", "= else", "  p No", "= if bar", "  p Yeah!", "= else", "  p No!", "=if bar", "  p Yeah!", "=else", "  p No!");
  integration_assertions.compilesTo(emblem, "{{#if foo}}<p>Yeah</p>{{else}}<p>No</p>{{/if}}{{#if bar}}<p>Yeah!</p>{{else}}<p>No!</p>{{/if}}{{#if bar}}<p>Yeah!</p>{{else}}<p>No!</p>{{/if}}");
});


test("unless", function () {
  var emblem = utils.w("unless bar", "  | Foo", "  unless foo", "    | Bar", "  else", "    | Woot", "else", "  | WRONG", "unless foo", "  | WRONG", "else", "  | Hooray");
  integration_assertions.compilesTo(emblem, "{{#unless bar}}Foo{{#unless foo}}Bar{{else}}Woot{{/unless}}{{else}}WRONG{{/unless}}{{#unless foo}}WRONG{{else}}Hooray{{/unless}}");
});

test("else followed by newline doesn't gobble else content", function () {
  var emblem = utils.w("if something", "  p something", "else", "", "  if nothing", "    p nothing", "  else", "    p not nothing");
  integration_assertions.compilesTo(emblem, "{{#if something}}<p>something</p>{{else}}{{#if nothing}}<p>nothing</p>{{else}}<p>not nothing</p>{{/if}}{{/if}}");
});

test("else if block", function () {
  var emblem = utils.w("if something", "  p something", "else if somethingElse", "  p nothing");
  integration_assertions.compilesTo(emblem, "{{#if something}}<p>something</p>{{else if somethingElse}}<p>nothing</p>{{/if}}");
});

test("else if with else block", function () {
  var emblem = utils.w("if something", "  p something", "else if somethingElse", "  p otherThing", "else", "  p nothing");
  integration_assertions.compilesTo(emblem, "{{#if something}}<p>something</p>{{else if somethingElse}}<p>otherThing</p>{{else}}<p>nothing</p>{{/if}}");
});

test("else if twice with else block", function () {
  var emblem = utils.w("if something", "  p something", "else if somethingElse", "  p otherThing", "else if anotherSomethingElse", "  p otherThing2", "else", "  p nothing");
  integration_assertions.compilesTo(emblem, "{{#if something}}<p>something</p>{{else if somethingElse}}<p>otherThing</p>{{else if anotherSomethingElse}}<p>otherThing2</p>{{else}}<p>nothing</p>{{/if}}");
});

test("else if with extra nodes", function () {
  var emblem = utils.w("if something", "  p something", "  h2", "    p something", "else if somethingElse", "  p otherThing", "  if twoThree", "    strong 2:3", "  else if twoFour", "    strong 2:4", "else if anotherSomethingElse", "  p otherThing2", "  h2", "    h4", "      p something", "else", "  p nothing");
  integration_assertions.compilesTo(emblem, "{{#if something}}<p>something</p><h2><p>something</p></h2>" + "{{else if somethingElse}}<p>otherThing</p>{{#if twoThree}}<strong>2:3</strong>{{else if twoFour}}<strong>2:4</strong>{{/if}}" + "{{else if anotherSomethingElse}}<p>otherThing2</p><h2><h4><p>something</p></h4></h2>" + "{{else}}<p>nothing</p>{{/if}}");
});

test("else if with component block", function () {
  var emblem = utils.w("if something", "  = my-component/widget-a value=model.options as |component indexWidget|", "    p The current value is #{ indexWidget }", "    strong = component.warningMessage", "else if somethingElse", "  h5 Danger!");
  integration_assertions.compilesTo(emblem, "{{#if something}}{{#my-component/widget-a value=model.options as |component indexWidget|}}<p>The current value is {{indexWidget }}</p><strong>{{component.warningMessage}}</strong>{{/my-component/widget-a}}" + "{{else if somethingElse}}<h5>Danger!</h5>{{/if}}");
});

test("inline if with unbound statements", function () {
  var emblem = utils.w("if something 'something' 'somethingElse'");
  integration_assertions.compilesTo(emblem, "{{if something 'something' 'somethingElse'}}");
});

test("inline if with bound statements", function () {
  var emblem = utils.w("if something something 'somethingElse'");
  integration_assertions.compilesTo(emblem, "{{if something something 'somethingElse'}}");
});

test("truth helpers syntax test 1", function () {
  var emblem = utils.w("if (eq 1 2)", "  |1 == 2", "unless (eq 1 2)", "  |1 != 2");
  integration_assertions.compilesTo(emblem, "{{#if (eq 1 2)}}1 == 2{{/if}}{{#unless (eq 1 2)}}1 != 2{{/unless}}");
});

test("truth helpers syntax test 2", function () {
  var emblem = utils.w("if (is-array siblings)", "  each siblings as |sibling|", "    |My sibling: #{ sibling }", "else if (and (not model.isLoading) model.isError)", "  p Hey!");
  integration_assertions.compilesTo(emblem, "{{#if (is-array siblings)}}{{#each siblings as |sibling|}}My sibling: {{sibling }}{{/each}}" + "{{else if (and (not model.isLoading) model.isError)}}<p>Hey!</p>{{/if}}");
});