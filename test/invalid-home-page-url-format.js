const tap = require('tap');
const debug = require('debug')('test');
const validate = require('../').validate;
const data = require('./fixtures/invalid-home-page-url-format');

tap.notOk(validate(data));
debug(validate.errors);
tap.equal(validate.errors.length, 1);
tap.equal(validate.errors[0].dataPath, '.home_page_url');
tap.equal(validate.errors[0].message, 'should match format "uri"');
