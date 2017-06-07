const tap = require('tap');
const debug = require('debug')('test');
const validate = require('../').validate;
const data = require('./fixtures/valid-basic');

tap.ok(validate(data));
debug(validate.errors);
