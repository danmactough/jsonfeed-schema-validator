const tap = require('tap');
const debug = require('debug')('test');
const { validate } = require('../');
const data = require('./fixtures/invalid-incorrect-version');

tap.notOk(validate(data));
debug(validate.errors);
tap.equal(validate.errors.length, 1);
tap.equal(validate.errors[0].dataPath, '.version');
tap.equal(validate.errors[0].message, 'should be equal to constant');
