const {defineParameterType} = require('@cucumber/cucumber');

const Person = require('../../src/shouty.js');

defineParameterType( {
  name: 'person',
  regexp: /Lucy|Sean/,
  transformer: name => new Person(name)
})
