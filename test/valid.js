const tap = require('tap');
const debug = require('debug')('test');
const { validate } = require('../');
const data = require('./fixtures/valid-basic');

tap.ok(validate(data));
debug(validate.errors);
