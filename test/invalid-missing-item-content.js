const tap = require('tap');
const debug = require('debug')('test');
const validate = require('../').validate;
const data = require('./fixtures/invalid-missing-item-content');

tap.notOk(validate(data));
debug(validate.errors);
tap.equal(validate.errors.length, 3);
tap.ok(validate.errors.every(err => {
  return err.dataPath === '.items[0]';
}));
tap.ok(validate.errors.some(err => {
  return err.message === 'should have required property \'content_html\'';
}));
tap.ok(validate.errors.some(err => {
  return err.message === 'should have required property \'content_text\'';
}));
tap.ok(validate.errors.some(err => {
  return err.message === 'should match some schema in anyOf';
}));
