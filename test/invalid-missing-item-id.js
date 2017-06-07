const tap = require('tap');
const debug = require('debug')('test');
const validate = require('../').validate;
const data = require('./fixtures/invalid-missing-item-id');

tap.notOk(validate(data));
debug(validate.errors);
tap.equal(validate.errors.length, 1);
tap.equal(validate.errors[0].dataPath, '.items[0]');
tap.equal(validate.errors[0].message, 'should have required property \'id\'');
