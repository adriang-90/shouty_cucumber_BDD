const Person = require('../../src/shouty.js');
const { Given, When, Then } = require("@cucumber/cucumber");
const {assertThat, is} = require('hamjest');

Given('{person} is located {int} meter(s) from Sean', function (lucy, distance) {
  this.lucy = new Person
  this.sean = new Person
// assuming everyone moves in one dimensional
  this.lucy.moveTo(distance)
         });

When('Sean shouts {string}', function (message) {
  this.sean.shouts(message)
  this.message = message
         });

Then('Lucy hears Sean\'s message', function () {
  assertThat(this.lucy.messagesHeard(), is([this.message]));
         });

